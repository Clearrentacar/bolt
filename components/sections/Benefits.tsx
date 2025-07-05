'use client';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, Heart, Smartphone } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Cobertura Nacional",
      description: "Atendimento em mais de 3.000 hospitais e clínicas em todo o Brasil"
    },
    {
      icon: Clock,
      title: "Sem Carência",
      description: "Diversos procedimentos sem período de carência para você usar imediatamente"
    },
    {
      icon: Users,
      title: "Plano Familiar",
      description: "Proteja toda sua família com desconto progressivo por dependente"
    },
    {
      icon: Award,
      title: "Melhor Custo-Benefício",
      description: "Planos acessíveis com a máxima qualidade e cobertura completa"
    },
    {
      icon: Heart,
      title: "Telemedicina",
      description: "Consultas online 24h com médicos especializados quando precisar"
    },
    {
      icon: Smartphone,
      title: "App Exclusivo",
      description: "Gerencie seu plano, agende consultas e acesse sua carteirinha digital"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Plano Perfeito?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos os melhores benefícios do mercado com a qualidade e confiança que você merece
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
            >
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Indicator */}
                <motion.div
                  className="w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 group-hover:w-12 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Cotação Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}