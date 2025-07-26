import { TrendingUp, TrendingDown } from 'lucide-react';

export default function PerformanceCard({ title, value, change, subtitle }) {
    // Handle both string and number change values, and determine if it's positive
    const changeValue = typeof change === 'string' ? parseFloat(change.replace(/[+%]/g, '')) : change;
    const isPositive = changeValue >= 0;
    
    return (
        <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex w-full justify-between items-center h-20">
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
        </div>
    );
}