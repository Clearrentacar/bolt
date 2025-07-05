'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 4000-0000",
      action: "tel:1140000000"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(11) 99999-9999",
      action: "https://wa.me/5511999999999"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@planoperfeito.com.br",
      action: "mailto:contato@planoperfeito.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      action: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
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
            Pronto para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              cuidar da sua saúde?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Entre em contato conosco e receba uma cotação personalizada em minutos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fale Conosco</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Nossa equipe de especialistas está pronta para ajudar você a encontrar o plano ideal.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  onClick={() => item.action && window.open(item.action, '_blank')}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              className="bg-white/30 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h4 className="text-gray-900 dark:text-white font-semibold">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábados: 8h às 14h</p>
                <p className="text-green-600 dark:text-green-400 font-semibold">Emergências: 24h todos os dias</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 dark:border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto flex items-center justify-center mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Cotação Gratuita pelo WhatsApp
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                Receba sua cotação personalizada em menos de 5 minutos. 
                Sem compromisso, sem burocracia.
              </p>

              <div className="space-y-4">
                <motion.div
                  className="bg-green-500/20 border border-green-500/30 dark:border-green-400/30 rounded-xl p-4"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                    <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-pulse" />
                    <span className="font-semibold">Atendimento Online Agora</span>
                  </div>
                </motion.div>

                <AnimatedButton
                  variant="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600"
                  icon={<MessageCircle size={20} />}
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de receber uma cotação personalizada do Plano Perfeito.', '_blank')}
                >
                  Iniciar Conversa no WhatsApp
                </AnimatedButton>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ou ligue diretamente: <strong className="text-gray-800 dark:text-white">(11) 4000-0000</strong>
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200/50 dark:border-white/20">
                {[
                  "✅ Cotação em 5min",
                  "✅ Sem compromisso", 
                  "✅ Desconto online",
                  "✅ Suporte 24/7"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-sm text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}