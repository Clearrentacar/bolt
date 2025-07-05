'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-gray-900 dark:text-white space-y-8">
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mais saúde,{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              mais qualidade de vida.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Escolha o Plano Perfeito e tenha acesso aos melhores cuidados de saúde para você e sua família.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <AnimatedButton
              variant="primary"
              size="lg"
              icon={<MessageCircle size={20} />}
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Fale Conosco
            </AnimatedButton>
            
            <AnimatedButton
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={20} />}
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
            </AnimatedButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-300/50 dark:border-slate-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { number: "500K+", label: "Clientes Ativos" },
              { number: "98%", label: "Satisfação" },
              { number: "24/7", label: "Suporte" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Animated Heart Visualization */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative">
            {/* Outer Glow Rings */}
            <motion.div
              className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-400/20 dark:to-cyan-400/20 blur-xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-4 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/40 dark:from-blue-500/30 dark:to-cyan-500/30 blur-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />

            {/* Main Heart Container */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              
              {/* Animated Heart Shape */}
              <motion.div
                className="relative w-48 h-48"
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Heart SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' }}
                >
                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M50,90 C50,90 20,65 20,45 C20,35 28,25 40,25 C45,25 50,30 50,30 C50,30 55,25 60,25 C72,25 80,35 80,45 C80,65 50,90 50,90 Z"
                    fill="url(#heartGradient)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </svg>

                {/* Heartbeat Line */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-8" viewBox="0 0 200 40">
                    <motion.path
                      d="M20,20 L40,20 L45,5 L50,35 L55,10 L60,30 L65,20 L180,20"
                      stroke="#FF3B82"
                      strokeWidth="2"
                      fill="none"
                      style={{ filter: 'drop-shadow(0 0 4px #FF3B82)' }}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.3, 0.7, 1]
                      }}
                    />
                  </svg>
                </div>

                {/* Pulse Dots */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [0, (i - 1) * 60],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"
                  style={{
                    top: `${30 + Math.random() * 40}%`,
                    left: `${30 + Math.random() * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400/50 dark:border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-500/70 dark:bg-white/50 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}