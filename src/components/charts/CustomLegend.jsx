import React from 'react'

function CustomLegend({payload}) {
  return (
    <div className="flex flex-col gap-2">
        {payload.map((entry, index) => (
            <div
            key={`legend-${index}`}
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200"
            >
            <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: entry.color }}
            ></div>
            <span className="font-medium">{entry.value}</span>
            </div>
        ))}
    </div>

  )
}

export default CustomLegend