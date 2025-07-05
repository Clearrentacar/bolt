'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    "Planos": [
      "Plano Essencial",
      "Plano Completo", 
      "Plano Premium",
      "Plano Empresarial"
    ],
    "Serviços": [
      "Telemedicina",
      "Check-up Preventivo",
      "Emergência 24h",
      "Medicina Ocupacional"
    ],
    "Suporte": [
      "Central de Atendimento",
      "Área do Cliente",
      "Área do Corretor",
      "Dúvidas Frequentes"
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/logo.png" 
                alt="Plano Perfeito" 
                className="h-16 w-auto"
              />
            </motion.div>
            
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Há mais de 10 anos cuidando da saúde de milhares de famílias brasileiras. 
              Oferecemos os melhores planos de saúde com qualidade, segurança e preços acessíveis.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(11) 4000-0000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contato@planoperfeito.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-slate-700 py-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Plano Perfeito. Todos os direitos reservados.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm mr-2">Siga-nos:</span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}