import React from 'react';

interface DVLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const DVLogo: React.FC<DVLogoProps> = ({ className = "", width = 120, height = 60 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 120 60" 
      width={width} 
      height={height}
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="30" cy="30" r="25" fill="url(#logoGradient)"/>
      
      {/* Letter D */}
      <path 
        d="M15 15 L15 45 L25 45 Q35 45 35 35 Q35 25 25 25 L15 25 Z" 
        fill="white" 
        stroke="#1E40AF" 
        strokeWidth="2"
      />
      
      {/* Letter V */}
      <path 
        d="M50 15 L60 45 L70 15" 
        fill="none" 
        stroke="url(#logoGradient)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Decorative elements */}
      <circle cx="85" cy="20" r="2" fill="#3B82F6" opacity="0.6"/>
      <circle cx="90" cy="40" r="1.5" fill="#1E40AF" opacity="0.4"/>
      <circle cx="95" cy="25" r="1" fill="#3B82F6" opacity="0.3"/>
    </svg>
  );
};

export default DVLogo; 