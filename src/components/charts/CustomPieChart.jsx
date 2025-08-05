import React from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({ data, colors, label, totalAmount, showTextAnchor }) => {
  return (
    <div className="w-full h-[350px] bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100} // ⬅️ Reduced from 110 to avoid cutting
            innerRadius={70}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>

          {/* Center Text */}
          {showTextAnchor && (
            <>
              <text
                x="50%"
                y="50%"
                dy={-12}
                textAnchor="middle"
                fill="#ccc"
                fontSize="14"
              >
                {label}
              </text>
              <text
                x="50%"
                y="50%"
                dy={16}
                textAnchor="middle"
                className="dark:fill-white"
                fill="#111"
                fontSize="22"
                fontWeight="bold"
              >
                {totalAmount}
              </text>
            </>
          )}

          <Tooltip content={CustomTooltip} />
          <Legend content={CustomLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>

  );
};

export default CustomPieChart;
