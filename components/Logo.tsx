import React from 'react';

interface LogoProps {
  className?: string;
  filled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", filled = true }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Silhouette */}
      <path 
        d="M20.5 11C20.5 11 22 12.5 22 14C22 15.5 20 17 20 17L16 18L13 21H7L4 17L2 11L5 5L11 2L17 4L20.5 11Z" 
        className={filled ? "fill-current" : "stroke-current stroke-2"}
      />
      
      {/* Tusk - White/Negative space if filled, or distinct line if stroke */}
      <path 
        d="M7 17C7 17 6 14 9 12" 
        stroke={filled ? "rgba(0,0,0,0.5)" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      
      {/* Eye */}
      <path 
        d="M15 10H17" 
        stroke={filled ? "rgba(0,0,0,0.5)" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      
      {/* Snout Detail */}
      <path 
        d="M19 14H21" 
        stroke={filled ? "rgba(0,0,0,0.5)" : "currentColor"} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
};