'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export default function AnimatedButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  icon
}: AnimatedButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 relative overflow-hidden gap-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:from-green-600 hover:to-emerald-700",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-900"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'primary' 
          ? "0 10px 25px rgba(34, 197, 94, 0.3)" 
          : "0 10px 25px rgba(255, 255, 255, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Efeito de brilho no hover */}
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        whileHover={{ opacity: variant === 'primary' ? 0.1 : 0.2 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Conteúdo do botão */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && icon}
        {children}
      </span>
    </motion.button>
  );
}