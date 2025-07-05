'use client';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/ui/PageLoader';

export default function Home() {
  return (
    <PageLoader message="Preparando seu Plano Perfeito...">
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Testimonials />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </PageLoader>
  );
}