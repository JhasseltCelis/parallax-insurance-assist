
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Clock, Target } from 'lucide-react';

const Index = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const parallaxSections = document.querySelectorAll('.parallax-content');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    parallaxSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-screen">
      {/* Hero Section */}
      <section className="parallax-container h-screen relative">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"
        />
        <div className="parallax-content h-full flex items-center justify-center relative">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
            >
              Servicios de Seguros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Transformando el sector asegurador con soluciones inteligentes
            </motion.p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Descubre más <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Principales Desafíos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Procesamiento Lento",
                description: "Hasta 15 días en casos complejos"
              },
              {
                icon: Activity,
                title: "Costos Operativos",
                description: "Altos costos por gestión manual"
              },
              {
                icon: Shield,
                title: "Regulaciones",
                description: "Cumplimiento con CNBV y CONDUSEF"
              },
              {
                icon: Target,
                title: "Atención Inmediata",
                description: "Demanda de respuesta en emergencias"
              }
            ].map((item, index) => (
              <Card key={index} className="glass-card p-6 transform hover:-translate-y-1 transition-all duration-300">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Soluciones con Agentes IA</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Asistencia 24/7 para emergencias</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span>Guía paso a paso en caso de siniestro</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span>Conexión automática con servicios de emergencia</span>
                </li>
              </ul>
            </div>
            <Card className="glass-card p-6">
              <h4 className="font-semibold mb-4">Beneficios</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-primary">-70%</p>
                  <p className="text-sm text-gray-600">en tiempo de respuesta</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">+35%</p>
                  <p className="text-sm text-gray-600">en ventas cruzadas</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados Esperados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "-60%",
                description: "en tiempo de cierre de siniestros"
              },
              {
                stat: "2x",
                description: "más fidelidad de clientes"
              },
              {
                stat: "100%",
                description: "compliant con la CNBV"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold mb-2">{item.stat}</p>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
