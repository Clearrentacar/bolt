'use client';
import { motion } from 'framer-motion';

interface HeartbeatLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function HeartbeatLoader({ size = 'md', className = '' }: HeartbeatLoaderProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24', 
    lg: 'w-32 h-32'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      
      {/* Outer Pulsing Circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-pink-500 opacity-70 shadow-lg"
        animate={{
          scale: [1.2, 1.2, 1.3, 1.25, 1.3, 1.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.5, 0.6, 0.75, 1]
        }}
        style={{
          boxShadow: '0 0 30px 0px rgba(255, 255, 255, 0.8)'
        }}
      />

      {/* Heart Shape */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{
          scale: [1.2, 1.2, 1.3, 1.25, 1.3, 1.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.5, 0.6, 0.75, 1]
        }}
      >
        <div className="relative w-8 h-8">
          {/* Heart Shape using CSS */}
          <div className="absolute w-full h-full">
            <div 
              className="absolute bg-gradient-to-br from-red-500 to-pink-600 rounded-t-full transform rotate-45 origin-bottom-left"
              style={{
                width: '50%',
                height: '80%',
                left: '25%',
                top: '0%',
                transformOrigin: '0 100%'
              }}
            />
            <div 
              className="absolute bg-gradient-to-br from-red-500 to-pink-600 rounded-t-full transform -rotate-45 origin-bottom-right"
              style={{
                width: '50%',
                height: '80%',
                left: '0%',
                top: '0%',
                transformOrigin: '100% 100%'
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Heartbeat Line SVG */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ width: '50%', height: '50%' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 150 100"
          className="text-white"
        >
          <motion.path
            d="M 10 50 l 20 0 l 5 -20 l 5 20 l 10 0 l 5 8 l 8 -35 l 8 55 l 5 -25 l 10 0 l 5 10 l 5 -10 l 20 0"
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.1,
              times: [0, 0.6, 0.9, 1]
            }}
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))'
            }}
          />
        </svg>
      </motion.div>

      {/* Pulse Rings */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{
            scale: [1, 2],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}