'use client';
import { motion, AnimatePresence } from 'framer-motion';
import HeartbeatLoader from './HeartbeatLoader';

interface LoadingScreenProps {
  isLoading: boolean;
  message?: string;
}

export default function LoadingScreen({ isLoading, message = "Carregando..." }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center space-y-6">
            
            {/* Heartbeat Loader */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HeartbeatLoader size="lg" />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {message}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Cuidando da sua saúde com carinho
              </p>
            </motion.div>

            {/* Animated Dots */}
            <motion.div
              className="flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}