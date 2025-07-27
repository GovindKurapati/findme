import { AreaChart, Area, ResponsiveContainer, ReferenceLine, XAxis, YAxis } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MetricCard({
    title,
    value,
    change,
    subtitle,
    peakActivityUsers,
    peakActivityTime,
    lowestActivityUsers,
    lowestActivityTime,
    chartData,
}) {
    const isPositive = parseFloat(change) >= 0;

    // Transform the chartData to match the recharts expected format
    const transformedChartData = chartData?.map((item, index) => ({
        value: item.count,
        index: index,
        hour: item.hour
    })) || [];

    const convertTo12Hour = (time24) => {
        if (!time24) return '';
        const [hours, minutes] = time24.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        const hour12 = hours % 12 || 12;
        return `${hour12}:${minutes} ${period}`;
    };

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-base font-light mb-2">{title}</h3>

            <div className="flex w-full justify-between items-start mb-3 h-16">

                <div className="flex flex-start flex-col">
                    <p className="text-3xl font-medium text-gray-900">{value}</p>
                    {subtitle && (
                        <p className="font-light text-sm mt-1 mb-1">{subtitle}</p>
                    )}
                </div>
                <div className={`flex flex-col items-end gap-1 font-light relative`}>
                    <span className="mr-7 text-base font-light ">{isPositive ? '+' : ''}{change}%</span>
                    <span className='absolute top-5 transform scale-x-45 right-[-10]'>
                        {isPositive ? (
                            <TrendingUp className="w-8 h-8 stroke-[1.5]" />
                        ) : (
                            <TrendingDown className="w-8 h-8 stroke-[1.5]" />
                        )}
                    </span>


                </div>
            </div>

            <div className="h-50 mb-4 relative mb-6">
                <div className="absolute inset-0 z-10">
                    <ResponsiveContainer width="70%" height="100%" zIndex={1}>
                        <AreaChart width="80%" data={transformedChartData} margin={{ top: 20, right: 8, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id={`gradient-${title.replaceAll(" ", "")}`} x1="0" y1="0" x2="0" y2="1.5">
                                    <stop offset="0%" stopColor="#344BFD" stopOpacity={0.8} />
                                    <stop offset="50%" stopColor="#ADB7F9" stopOpacity={0.4} />
                                    <stop offset="100%" stopColor="#ffffff" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <XAxis hide />
                            <YAxis hide />


                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#344BFD"
                                strokeWidth={2}
                                fill={`url(#gradient-${title.replaceAll(" ", "")})`}
                                dot={(props) => {
                                    // Only show dot for the last point
                                    if (props.payload && props.payload.index === transformedChartData.length - 1) {
                                        return (
                                            <circle
                                                key={props.payload.index}
                                                cx={props.cx}
                                                cy={props.cy}
                                                r={5}
                                                fill="#ffffff"
                                                stroke="#344BFD"
                                                strokeWidth={4}
                                            />
                                        );
                                    }
                                    return null;
                                }}
                                activeDot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="absolute top-0 left-[67%] xl:left-[68%] mr-20 h-full w-[0.5px] bg-[#344BFD] z-0" />


                {/* Horizontal lines - top and bottom */}
                <div className="absolute left-2 right-2 top-0 h-px bg-gray-300"></div>
                <div className="absolute left-2 right-2 bottom-0 h-px bg-gray-300"></div>
            </div>

            <div className="text-md text-[#767676] space-y-1">
                <div className="mb-4">Peak Activity: {peakActivityUsers} users at {convertTo12Hour(peakActivityTime)}</div>
                <div>Lowest Activity: {lowestActivityUsers} users at {convertTo12Hour(lowestActivityTime)}</div>
            </div>
        </div>
    );
};
