
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Clock, Target, CheckCircle, Zap, BarChart4, LineChart, RefreshCw, UserPlus } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  
  // Parallax effect for multiple layers
  const parallaxLayer1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const parallaxLayer2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const parallaxLayer3 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const parallaxSections = document.querySelectorAll('.parallax-content');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Update active section for navigation
            const id = entry.target.id;
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    parallaxSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3">
        <ul className="flex space-x-6">
          {[
            { id: "intro", label: "Intro" },
            { id: "challenges", label: "Desafíos" },
            { id: "agents", label: "Agentes IA" },
            { id: "operators", label: "Operadores IA" },
            { id: "results", label: "Resultados" },
          ].map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`text-sm font-medium px-3 py-2 rounded-full transition-colors ${activeSection === item.id ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="parallax-container h-screen relative">
        {/* Multiple Parallax Layers */}
        <motion.div
          style={{ y: parallaxLayer1 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent"
        />
        <motion.div
          style={{ y: parallaxLayer2 }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-200 blur-3xl" />
          <div className="absolute left-20 top-40 w-72 h-72 rounded-full bg-indigo-200 blur-3xl" />
        </motion.div>
        <motion.img 
          src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          style={{ y: parallaxLayer3, scale }}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        
        <div className="parallax-content flex items-center justify-center relative h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                className="w-24 h-24 mx-auto mb-6 rounded-full object-cover shadow-lg"
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-primary mb-6"
            >
              <span className="text-highlight">Servicios</span> de <span className="text-highlight">Seguros</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10"
            >
              Transformando el sector asegurador con soluciones inteligentes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-glow">
                Descubre más <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center items-start p-1">
            <motion.div 
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut", 
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section id="intro" ref={containerRef} className="section-padding bg-white relative min-h-screen flex items-center">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -right-52 -top-52 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-70"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute -left-52 bottom-20 w-80 h-80 rounded-full bg-indigo-50 blur-3xl opacity-70"
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <motion.h2 
                className="text-4xl font-bold mb-8"
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-highlight">Introducción</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 mb-6"
              >
                El sector asegurador en México enfrenta altas exigencias de eficiencia y transparencia, 
                especialmente para PYMES que compiten con grandes compañías.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700"
              >
                La modernización a través de la inteligencia artificial representa una oportunidad 
                para optimizar procesos y mejorar la experiencia del cliente.
              </motion.p>
            </div>
            
            <div className="md:w-1/2 relative">
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Insurance Office" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Innovación en seguros</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="section-padding bg-gradient-to-b from-white to-blue-50 relative min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="text-highlight">Principales Desafíos</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Procesamiento Lento",
                description: "Hasta 15 días en casos complejos",
                image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                icon: Activity,
                title: "Costos Operativos",
                description: "Altos costos por gestión manual",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                icon: Shield,
                title: "Regulaciones",
                description: "Cumplimiento con CNBV y CONDUSEF",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                icon: Target,
                title: "Atención Inmediata",
                description: "Demanda de respuesta en emergencias",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
              >
                <HoverCard>
                  <HoverCardTrigger>
                    <motion.div
                      whileHover="hover"
                      variants={cardVariants}
                      className="glass-card p-6 h-full cursor-pointer"
                    >
                      <div className="flex items-center justify-center mb-6">
                        <motion.div
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center"
                        >
                          <item.icon className="h-8 w-8 text-primary" />
                        </motion.div>
                      </div>
                      <h3 className="font-semibold text-xl mb-3 text-center">{item.title}</h3>
                      <p className="text-gray-600 text-center">{item.description}</p>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-0 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-36 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        {item.description}. Un problema común que afecta la satisfacción del cliente y la eficiencia operativa.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Agents IA */}
      <section id="agents" className="section-padding relative min-h-screen flex items-center">
        <motion.div 
          style={{ y: parallaxLayer1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 z-0"
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="text-highlight">Soluciones con Agentes IA</span>
          </motion.h2>
          
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-12 text-center"
            >
              Casos de uso
            </motion.h3>
            
            <div className="space-y-16">
              {[
                {
                  title: "Asistencia 24/7 para emergencias",
                  icon: Zap,
                  points: [
                    "Guía al cliente paso a paso en caso de siniestro (ej: \"Tome fotos del accidente y suba la ubicación GPS\").",
                    "Conecta automáticamente con grúas, talleres o servicios médicos según la póliza."
                  ],
                  image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                },
                {
                  title: "Cotización instantánea de pólizas",
                  icon: LineChart,
                  points: [
                    "Genera propuestas personalizadas en minutos, considerando edad, historial y necesidades del cliente."
                  ],
                  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                },
                {
                  title: "Renovación proactiva de pólizas",
                  icon: RefreshCw,
                  points: [
                    "Notifica al cliente 30 días antes del vencimiento y ofrece actualizaciones según cambios en su perfil (ej: \"¿Necesita ampliar su seguro de hogar por una habitación nueva?\")."
                  ],
                  image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4"
                      >
                        <item.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h4 className="text-2xl font-semibold">{item.title}</h4>
                    </div>
                    
                    <ul className="space-y-4 mt-6">
                      {item.points.map((point, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-lg">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="rounded-xl overflow-hidden shadow-xl"
                    >
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mt-20">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">Beneficios</h3>
              <ul className="space-y-6">
                {[
                  {
                    icon: Clock,
                    text: "-70% en tiempo de respuesta a emergencias: Atención inmediata reduce el estrés del cliente."
                  },
                  {
                    icon: UserPlus,
                    text: "+35% en ventas cruzadas: Recomendaciones basadas en datos (ej: seguro de vida para clientes con hipotecas)."
                  },
                  {
                    icon: Activity,
                    text: "Integración con sistemas como SISCO (gestión de siniestros) y plataformas de la CONDUSEF."
                  }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="glass-card p-8 h-full">
                  <h4 className="font-semibold text-xl mb-6">Tiers recomendados</h4>
                  <div className="space-y-8">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-lg bg-blue-50/80 border border-blue-100"
                    >
                      <p className="text-xl font-bold text-primary mb-2">Pro</p>
                      <p className="text-gray-600">Ideal para aseguradoras medianas que gestionan 500+ pólizas anuales.</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-lg bg-indigo-50/80 border border-indigo-100"
                    >
                      <p className="text-xl font-bold text-primary mb-2">Max</p>
                      <p className="text-gray-600">Para corredurías grandes que necesitan automatización de flujos legales (ej: generación de contratos con cláusulas dinámicas).</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Operators IA */}
      <section id="operators" className="section-padding bg-blue-50 relative min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="text-highlight">Soluciones con Operadores IA</span>
          </motion.h2>
          
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-12 text-center"
            >
              Procesos automatizados
            </motion.h3>
            
            <Carousel
              opts={{ loop: true }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {[
                  {
                    title: "Validación automática de reclamos",
                    description: [
                      "Analiza fotos, informes médicos o documentos legales para detectar fraudes o errores.",
                      "Procesa pagos a proveedores (talleres, hospitales) en 24 horas."
                    ],
                    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  },
                  {
                    title: "Actualización de bases de datos",
                    description: [
                      "Sincroniza información de clientes en sistemas CRM, contables y regulatorios."
                    ],
                    image: "https://images.unsplash.com/photo-1560732488-7b5f5b8c2f89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  },
                  {
                    title: "Cumplimiento normativo",
                    description: [
                      "Genera reportes automáticos para la CNBV y almacena documentos según la NOM de seguros."
                    ],
                    image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
                ].map((item, index) => (
                  <CarouselItem key={index}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-0 overflow-hidden h-full"
                    >
                      <div className="h-52 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                        <ul className="space-y-3">
                          {item.description.map((desc, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 space-x-4">
                <CarouselPrevious className="relative inset-auto" />
                <CarouselNext className="relative inset-auto" />
              </div>
            </Carousel>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mt-20">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">Beneficios</h3>
              <ul className="space-y-6">
                {[
                  {
                    icon: Activity,
                    text: "-90% en errores de procesamiento: Validación precisa de documentos."
                  },
                  {
                    icon: BarChart4,
                    text: "-50% en costos de cumplimiento: Automatización de reportes regulatorios."
                  },
                  {
                    icon: Shield,
                    text: "Integración con herramientas como SAP, Salesforce y Facturación Electrónica (CFDI)."
                  }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="glass-card p-8 h-full">
                  <h4 className="font-semibold text-xl mb-6">Tiers recomendados</h4>
                  <div className="space-y-8">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-lg bg-blue-50/80 border border-blue-100"
                    >
                      <p className="text-xl font-bold text-primary mb-2">Básico</p>
                      <p className="text-gray-600">Para startups de seguros que necesitan automatizar 5-10 procesos clave (ej: registro de pólizas).</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-lg bg-indigo-50/80 border border-indigo-100"
                    >
                      <p className="text-xl font-bold text-primary mb-2">Max</p>
                      <p className="text-gray-600">Aseguradoras con operaciones nacionales que requieren auditorías en tiempo real y BI predictivo.</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="section-padding bg-primary text-white relative min-h-screen flex items-center">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: parallaxLayer2 }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-20"
          >
            Resultados esperados
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                stat: "-60%",
                description: "en tiempo de cierre de siniestros: Procesamiento ágil mejora la reputación de la marca",
                icon: Clock
              },
              {
                stat: "2x",
                description: "más fieles: Atención proactiva y transparente",
                icon: UserPlus
              },
              {
                stat: "100%",
                description: "compliant con la CNBV: Reportes automáticos evitan sanciones",
                icon: Shield
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <item.icon className="h-10 w-10 text-white" />
                </motion.div>
                <motion.p 
                  className="text-5xl font-bold mb-4"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.stat}
                </motion.p>
                <p className="text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-20 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Success graph" 
              className="max-w-full md:max-w-xl rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Example Implementation Section */}
      <section className="section-padding bg-white relative min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Ejemplo de implementación
          </motion.h2>
          
          <motion.div 
            className="glass-card p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-8">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Company Logo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-semibold">Caso: Aseguradora "Protección MX"</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-red-50/70 border border-red-100"
              >
                <h4 className="text-xl font-semibold mb-4 text-red-600">Desafío</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>40% de abandonos en renovaciones por falta de seguimiento.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>30 días promedio para resolver reclamos de automóviles.</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-blue-50/70 border border-blue-100"
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-600">Solución</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Agente IA para guiar siniestros y renovar pólizas automáticamente (Tier Max).</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Operador IA para validar documentos y procesar pagos (Tier Pro).</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-green-50/70 border border-green-100"
              >
                <h4 className="text-xl font-semibold mb-4 text-green-600">Resultado</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>50% menos de tiempo en reclamos (de 30 a 15 días).</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>25% más de renovaciones anuales.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Results graph" 
                className="mx-auto max-w-full md:max-w-lg rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-600 italic">Resultados monitoreados durante 12 meses después de la implementación</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white relative">
        <motion.div 
          className="absolute inset-0 overflow-hidden" 
          style={{ opacity: 0.1 }}
        >
          <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-indigo-400 blur-3xl" />
          <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        </motion.div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Listo para transformar su negocio de seguros?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-12"
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pulse-glow"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Solicitar demostración <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
