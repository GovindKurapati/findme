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
    'US': '#8B7FE8',
    'Canada': '#7DD3FC',
    'Japan': '#1F2937',
    'India': '#60A5FA',
    'Mexico': '#93C5FD',
    'Australia': '#86EFAC',
    'UK': '#7DD3FC',
    'France': '#6366F1',
    'Spain': '#6B7280',
    'Germany': '#C084FC',
    'Italy': '#86EFAC',
    'South Korea': '#60A5FA'
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