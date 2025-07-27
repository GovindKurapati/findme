export const systemUsageColors = {
    'Memory Usage': '#1564CA',
    'CPU Usage': '#A4DCFD',
    'Server': '#052471'
};

export const memoryUsageColors = {
    'Main Server': '#3B82F6',
    'Other Processes': '#93C5FD',
    'Free Memory': '#374151'
};

export const countryColors = {
    'US': '#9F9FF8',
    'Canada': '#96E2D6',
    'Japan': '#000000',
    'India': '#92BFFF',
    'Mexico': '#AEC7ED',
    'Australia': '#94E9B8',
    'UK': '#A4DCFD',
    'France': '#718EBF',
    'Spain': '#495057',
    'Germany': '#CE94E2',
    'Italy': '#C3E8D3',
    'South Korea': '#5EA8F8'
};

export const stateColors = {
    'AL': '#BFDBFE', 'AK': '#E5E7EB', 'AZ': '#F3F4F6', 'AR': '#3B82F6',
    'CA': '#7DD3FC', 'CO': '#6B7280', 'CT': '#1E40AF', 'DE': '#DBEAFE',
    'FL': '#6B7280', 'GA': '#1E3A8A', 'HI': '#BFDBFE', 'ID': '#E5E7EB',
    'IL': '#F3F4F6', 'IN': '#3B82F6', 'IA': '#7DD3FC', 'KS': '#4B5563',
    'KY': '#1E40AF', 'LA': '#60A5FA', 'ME': '#9CA3AF', 'MD': '#BFDBFE',
    'MA': '#3B82F6', 'MI': '#6B7280', 'MN': '#60A5FA', 'MS': '#E5E7EB',
    'MO': '#4B5563', 'MT': '#F3F4F6', 'NE': '#BFDBFE', 'NV': '#6B7280',
    'NH': '#E5E7EB', 'NJ': '#3B82F6', 'NM': '#9CA3AF', 'NY': '#1E40AF',
    'NC': '#60A5FA', 'ND': '#F3F4F6', 'OH': '#4B5563', 'OK': '#BFDBFE',
    'OR': '#6B7280', 'PA': '#3B82F6', 'RI': '#E5E7EB', 'SC': '#9CA3AF',
    'SD': '#F3F4F6', 'TN': '#4B5563', 'TX': '#1E40AF', 'UT': '#6B7280',
    'VT': '#E5E7EB', 'VA': '#3B82F6', 'WA': '#60A5FA', 'WV': '#9CA3AF',
    'WI': '#4B5563', 'WY': '#F3F4F6'
};

export const addColorsToData = (data, colorMap) => {
    return Object.entries(data).map(([name, value]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1'),
        value,
        color: colorMap[name] || '#6B7280' // fallback color
    }));
};

export const addColorsToArrayData = (dataArray, colorMap, nameKey = 'name') => {
    return dataArray.map(item => ({
        ...item,
        color: colorMap[item[nameKey]] || '#6B7280'
    }));
};