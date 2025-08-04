import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({ data, colors, label, totalAmount, showTextAnchor }) => {
  return (
    <div className="w-full h-80 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
          <Legend content={CustomLegend}/>
          {showTextAnchor && (
            <>
              <text
                x="50%"
                y="50%"
                dy={-25}
                textAnchor="middle"
                fill="#666"
                fontSize="14px"
              >
                {label}
              </text>
              <text
                x="50%"
                y="50%"
                dy={8}
                textAnchor="middle"
                fill="#333"
                fontSize="24px"
                fontWeight="600"
              >
                {totalAmount}
              </text>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
