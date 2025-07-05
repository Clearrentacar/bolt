'use client';
import { motion } from 'framer-motion';
import { Check, Star, Crown } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

export default function Pricing() {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 89",
      period: "/mês",
      description: "Ideal para quem busca proteção básica",
      features: [
        "Consultas médicas ilimitadas",
        "Exames básicos inclusos",
        "Emergência 24h",
        "Telemedicina",
        "Rede credenciada nacional"
      ],
      highlight: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Completo",
      price: "R$ 149",
      period: "/mês",
      description: "Nosso plano mais popular",
      features: [
        "Tudo do plano Essencial",
        "Cirurgias sem carência",
        "Internações incluídas",
        "Exames de alta complexidade",
        "Medicina preventiva",
        "Desconto em medicamentos"
      ],
      highlight: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Premium",
      price: "R$ 249",
      period: "/mês",
      description: "Máxima cobertura e conforto",
      features: [
        "Tudo do plano Completo",
        "Quarto privativo",
        "Check-up anual gratuito",
        "Segunda opinião médica",
        "Cobertura internacional",
        "Concierge médico 24h",
        "Tratamentos estéticos"
      ],
      highlight: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Escolha o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              plano ideal
            </span>{' '}
            para você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos opções flexíveis que cabem no seu orçamento sem comprometer a qualidade
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                plan.highlight 
                  ? 'ring-4 ring-green-500 scale-105 md:scale-110' 
                  : 'hover:shadow-2xl'
              } transition-all duration-300`}
              whileHover={{ 
                y: plan.highlight ? 0 : -10,
                scale: plan.highlight ? 1.05 : 1.02
              }}
            >
              
              {/* Popular Badge */}
              {plan.highlight && (
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>Mais Popular</span>
                  </div>
                </motion.div>
              )}

              {/* Card Header */}
              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white text-center`}>
                {plan.name === "Premium" && (
                  <Crown className="w-8 h-8 mx-auto mb-2" />
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/90 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-white/80 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <AnimatedButton
                  variant="primary"
                  size="lg"
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  Contratar Agora
                </AnimatedButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600">
            💳 Aceitamos todos os cartões de crédito • 🏥 Rede credenciada nacional • 📱 App gratuito
          </p>
          <p className="text-sm text-gray-500">
            Valores podem variar conforme idade e região. Entre em contato para uma cotação personalizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}