'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      content: "O Plano Perfeito salvou minha vida! Quando precisei de uma cirurgia de emergência, tudo foi resolvido rapidamente. A equipe é excepcional e o atendimento é humanizado."
    },
    {
      name: "João Santos",
      role: "Professor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      content: "Excelente custo-benefício! Consegui um plano completo para toda minha família por um preço acessível. Os médicos são de primeira qualidade."
    },
    {
      name: "Ana Costa",
      role: "Enfermeira",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      content: "Como profissional da saúde, sei a importância de um bom plano. O Plano Perfeito superou todas as minhas expectativas. Recomendo de olhos fechados!"
    },
    {
      name: "Carlos Oliveira",
      role: "Advogado",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      content: "A telemedicina é fantástica! Já utilizei várias vezes e sempre fui muito bem atendido. O app é intuitivo e facilita muito nossa vida."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            O que nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mais de 500 mil pessoas confiam no Plano Perfeito para cuidar da sua saúde
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white p-3 rounded-full hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-white/20 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white p-3 rounded-full hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Testimonial Cards */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-md border border-gray-200/30 dark:border-white/20 rounded-2xl p-8 h-full flex flex-col justify-center">
                  
                  {/* Quote Icon */}
                  <motion.div
                    className="text-cyan-600 dark:text-cyan-400 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Quote size={48} />
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.blockquote
                    className="text-xl md:text-2xl text-gray-800 dark:text-white mb-8 leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>

                  {/* User Info */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500 dark:border-cyan-400"
                      />
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-600 dark:bg-cyan-400 w-8' 
                    : 'bg-gray-400/50 dark:bg-white/30 hover:bg-gray-500/70 dark:hover:bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}