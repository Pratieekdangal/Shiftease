
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  intensity?: 'light' | 'medium' | 'heavy';
}

const GlassCard = ({ 
  children, 
  className, 
  hover = true, 
  intensity = 'medium',
  ...props 
}: GlassCardProps) => {
  const intensityClasses = {
    light: 'bg-white/20 border-white/20',
    medium: 'bg-white/40 border-white/30',
    heavy: 'bg-white/60 border-white/40'
  };

  return (
    <div 
      className={cn(
        "backdrop-blur-md rounded-2xl shadow-glass transition-all duration-300 ease-out",
        intensityClasses[intensity],
        hover && "hover:shadow-glass-hover hover:bg-white/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
