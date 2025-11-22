import React from "react";
import "./Circle.css";

const Circle = ({ percent = 0, strokeWidth = 20, color = "#7579FF", bgColor = "#e6e6e6" }) => {
  const size = 200; // базовый размер для расчётов
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="circle-container">
      <svg viewBox={`0 0 ${size} ${size}`}>
        {/* Фон круга */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Прогресс */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* Текст */}
        <text
          x="50%"
          y="50%"
          fill={color}
          fontSize={size * 0.16}
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default Circle;
