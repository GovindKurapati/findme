import { TrendingUp, TrendingDown } from 'lucide-react';

export default function PerformanceCard({ title, value, change, subtitle }) {
    // Handle both string and number change values, and determine if it's positive
    const changeValue = typeof change === 'string' ? parseFloat(change.replace(/[+%]/g, '')) : change;
    const isPositive = changeValue >= 0;

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-gray-600 text-base font-normal mb-2">{title}</h3>

            <div className="flex w-full justify-between items-start h-14">

                <div className="flex flex-start flex-col">
                    <p className="text-3xl font-medium text-gray-900">{value}</p>
                    {subtitle && (
                        <p className="text-gray-600 font-normal text-sm mt-1">{subtitle}</p>
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
        </div>
    );
}