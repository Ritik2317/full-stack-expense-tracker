import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from "recharts";

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

const CustomBarChart = ({ data }) => {
  const getBarColor = (index) => (index % 2 === 0 ? "#875cf5" : "#cfbefb");

  return (
    <div className="bg-white dark:bg-gray-900 mt-6 px-4 py-6 rounded-xl shadow-md">
      {Array.isArray(data) && data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" tick={{ fontSize: 12, fill: "#ccc" }} />
            <YAxis tick={{ fontSize: 12, fill: "#ccc" }} />
            <Tooltip className="cursor-pointer"
                content={<CustomToolTip />}
                cursor={{ fill: 'transparent' }} // Optional: hides hover effect
                wrapperStyle={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
            />
            <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={getBarColor(index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-red-500 text-center">No data available</p>
      )}
    </div>
  );
};

export default CustomBarChart;
