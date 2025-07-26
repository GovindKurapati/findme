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
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex w-full justify-between items-center mb-4 h-20">
                <div className="flex-1">
                    <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
                    <p className="text-3xl font-medium text-gray-900">{value}</p>
                    {subtitle && (
                        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
                    )}
                </div>
                <div className={`flex flex-col items-end gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    <span className="text-sm font-medium">{change}</span>
                    {isPositive ? (
                        <TrendingUp className="w-4 h-4" />
                    ) : (
                        <TrendingDown className="w-4 h-4" />
                    )}
                </div>
            </div>

            <div className="h-50 mb-4 relative">
                <div className="absolute inset-0 z-10">
                    <ResponsiveContainer width="70%" height="100%" zIndex={1}>
                        <AreaChart width="80%" data={transformedChartData} margin={{ top: 50, right: 8, left: 5, bottom: 5 }}>
                            <defs>
                                <linearGradient id={`gradient-${title.replaceAll(" ", "")}`} x1="0" y1="1" x2="0" y2="0">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity={0.4} />
                                    <stop offset="50%" stopColor="#ADB7F9" stopOpacity={0.5} />
                                    <stop offset="100%" stopColor="#B1B9F8" stopOpacity={0.9} />

                                </linearGradient>
                            </defs>
                            <XAxis hide />
                            <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />

                            {/* Horizontal reference lines at top and bottom */}
                            <ReferenceLine
                                y="dataMax + 10"
                                stroke="#B1B1B1"
                                strokeWidth={1}
                                strokeDasharray="2 2"
                            />
                            <ReferenceLine
                                y="dataMin - 10"
                                stroke="#B1B1B1"
                                strokeWidth={1}
                                strokeDasharray="2 2"
                            />


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
                <div className="absolute top-0 left-[68%] mr-20 h-full w-px bg-gray-300 z-0" />


                {/* Horizontal lines - top and bottom */}
                <div className="absolute left-2 right-2 top-0 h-px bg-gray-300"></div>
                <div className="absolute left-2 right-2 bottom-0 h-px bg-gray-300"></div>
            </div>

            <div className="text-md text-gray-500 space-y-1">
                <div className="mb-4">Peak Activity: {peakActivityUsers} at {convertTo12Hour(peakActivityTime)}</div>
                <div>Lowest Activity: {lowestActivityUsers} at {convertTo12Hour(lowestActivityTime)}</div>
            </div>
        </div>
    );
};
