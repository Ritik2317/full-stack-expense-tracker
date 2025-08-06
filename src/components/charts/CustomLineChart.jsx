import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function CustomLineChart({ data }) {
    const CustomToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
            <div className="bg-gray-900 text-white p-2 rounded-lg shadow-md">
                <p className="font-semibold">{payload[0].payload.category}</p>
                <p className="text-sm text-gray-400">
                Amount: ₹ <span className="text-white font-bold">{payload[0].payload.amount}</span>
                </p>
            </div>
            );
        }
        return null;
    };
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip content={CustomToolTip}/>
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;
