import React from 'react';
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

const Legend = ({ data, title, colorMap }) => (
  <div className="mt-8">
    <div className="space-y-3">
      {data.map((entry, index) => (
        <div key={index} className="flex items-center justify-between gap-10">
          <div className="flex items-center space-x-4">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: colorMap[entry.unit] || '#6B7280' }}
            />
            <span className="text-gray-700 font-medium">{entry.unit}</span>
          </div>
          <span className="text-gray-600 font-light">{entry.value}%</span>
        </div>
      ))}
    </div>
  </div>
);

export default function PieChart({ 
  data, 
  colorMap, 
  title, 
  centerText = null,
  centerSubText = null,
  startAngle = 50,
  endAngle = 480
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h2 className="text-lg font-normal text-gray-900 mb-8">{title}</h2>

      <div className="flex flex-col items-center">
        <div className="w-80 h-80 mb-4 relative">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                startAngle={startAngle}
                endAngle={endAngle}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colorMap[entry.unit]} stroke="none" strokeWidth={0} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>

          {/* Center text overlay */}
          {centerText && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl font-medium text-gray-900">{centerText}</div>
              {centerSubText && (
                <div className="text-xs text-gray-500 font-light mt-1">{centerSubText}</div>
              )}
            </div>
          )}
        </div>

        <Legend data={data} title={title} colorMap={colorMap} />
      </div>
    </div>
  );
} 