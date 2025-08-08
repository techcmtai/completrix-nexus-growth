import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface InteractiveChartProps {
  data: any[];
  type: 'line' | 'bar' | 'pie';
  title: string;
  animated?: boolean;
  colorScheme?: string[];
  height?: number;
}

const InteractiveChart: React.FC<InteractiveChartProps> = ({
  data,
  type,
  title,
  animated = true,
  colorScheme = ['#14b8a6', '#0d9488', '#0f766e', '#134e4a'],
  height = 300
}) => {
  const [animatedData, setAnimatedData] = useState(data.map(item => ({ ...item, value: 0 })));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated && isVisible) {
      const timer = setTimeout(() => {
        setAnimatedData(data);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [data, animated, isVisible]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-effect rounded-lg p-3 shadow-glow"
        >
          <p className="text-sm font-semibold text-primary mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </motion.div>
      );
    }
    return null;
  };

  const renderChart = () => {
    const chartData = animated ? animatedData : data;

    switch (type) {
      case 'line':
        return (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={colorScheme[0]} 
              strokeWidth={3}
              dot={{ fill: colorScheme[0], strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: colorScheme[1] }}
              animationDuration={animated ? 2000 : 0}
            />
          </LineChart>
        );

      case 'bar':
        return (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              radius={[4, 4, 0, 0]}
              animationDuration={animated ? 1500 : 0}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colorScheme[index % colorScheme.length]} />
              ))}
            </Bar>
          </BarChart>
        );

      case 'pie':
        return (
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={height / 3}
              dataKey="value"
              animationDuration={animated ? 2000 : 0}
              animationBegin={0}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colorScheme[index % colorScheme.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="bg-card rounded-2xl p-6 shadow-elevated border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h3 
        className="text-xl font-bold text-primary mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>
      
      <div style={{ height: height }}>
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default InteractiveChart;