
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Clock, Target } from 'lucide-react';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
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
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="parallax-container h-screen relative">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white"
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

      {/* Introduction Section */}
      <section ref={containerRef} className="section-padding bg-white relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Introducción</h2>
          <div className="parallax-content">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-6"
            >
              El sector asegurador en México enfrenta altas exigencias de eficiencia y transparencia, 
              especialmente para PYMES que compiten con grandes compañías.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50 relative">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
              >
                <Card className="glass-card p-6 transform hover:-translate-y-1 transition-all duration-300">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Soluciones con Agentes IA</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Casos de uso:</h3>
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3">Asistencia 24/7 para emergencias:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Guía al cliente paso a paso en caso de siniestro (ej: "Tome fotos del accidente y suba la ubicación GPS").</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Conecta automáticamente con grúas, talleres o servicios médicos según la póliza.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3">Cotización instantánea de pólizas:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Genera propuestas personalizadas en minutos, considerando edad, historial y necesidades del cliente.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3">Renovación proactiva de pólizas:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Notifica al cliente 30 días antes del vencimiento y ofrece actualizaciones según cambios en su perfil (ej: "¿Necesita ampliar su seguro de hogar por una habitación nueva?").</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">Beneficios</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>-70% en tiempo de respuesta a emergencias: Atención inmediata reduce el estrés del cliente.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>+35% en ventas cruzadas: Recomendaciones basadas en datos (ej: seguro de vida para clientes con hipotecas).</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Integración con sistemas como SISCO (gestión de siniestros) y plataformas de la CONDUSEF.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6">
                <h4 className="font-semibold mb-4">Tiers recomendados</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-bold text-primary">Pro</p>
                    <p className="text-gray-600">Ideal para aseguradoras medianas que gestionan 500+ pólizas anuales.</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">Max</p>
                    <p className="text-gray-600">Para corredurías grandes que necesitan automatización de flujos legales (ej: generación de contratos con cláusulas dinámicas).</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operators IA Section */}
      <section className="section-padding bg-blue-50 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Soluciones con Operadores IA</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Procesos automatizados:</h3>
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3">Validación automática de reclamos:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Analiza fotos, informes médicos o documentos legales para detectar fraudes o errores.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Procesa pagos a proveedores (talleres, hospitales) en 24 horas.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3">Actualización de bases de datos:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Sincroniza información de clientes en sistemas CRM, contables y regulatorios.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3">Cumplimiento normativo:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Genera reportes automáticos para la CNBV y almacena documentos según la NOM de seguros.</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">Beneficios</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>-90% en errores de procesamiento: Validación precisa de documentos.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>-50% en costos de cumplimiento: Automatización de reportes regulatorios.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Integración con herramientas como SAP, Salesforce y Facturación Electrónica (CFDI).</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6">
                <h4 className="font-semibold mb-4">Tiers recomendados</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-bold text-primary">Básico</p>
                    <p className="text-gray-600">Para startups de seguros que necesitan automatizar 5-10 procesos clave (ej: registro de pólizas).</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">Max</p>
                    <p className="text-gray-600">Aseguradoras con operaciones nacionales que requieren auditorías en tiempo real y BI predictivo.</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-primary text-white relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados esperados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "-60%",
                description: "en tiempo de cierre de siniestros: Procesamiento ágil mejora la reputación de la marca"
              },
              {
                stat: "2x",
                description: "más fieles: Atención proactiva y transparente"
              },
              {
                stat: "100%",
                description: "compliant con la CNBV: Reportes automáticos evitan sanciones"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold mb-2">{item.stat}</p>
                <p className="text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Implementation Section */}
      <section className="section-padding bg-white relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ejemplo de implementación</h2>
          
          <motion.div 
            className="glass-card p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Caso: Aseguradora "Protección MX"</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Desafío:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>40% de abandonos en renovaciones por falta de seguimiento.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>30 días promedio para resolver reclamos de automóviles.</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Solución:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Agente IA para guiar siniestros y renovar pólizas automáticamente (Tier Max).</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Operador IA para validar documentos y procesar pagos (Tier Pro).</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Resultado:</h4>
              <ul className="space-y-4 pl-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>50% menos de tiempo en reclamos (de 30 a 15 días).</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>25% más de renovaciones anuales.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Listo para transformar su negocio de seguros?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contáctenos hoy para una demostración personalizada
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar demostración <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
