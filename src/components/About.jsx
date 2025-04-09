"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-900 shadow-xl">
                <img
                  src="/source/Picture4.webp?height=600&width=600"
                  alt="Jefferson Sanchez"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/10 rounded-2xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-purple-500/20 rounded-2xl z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre <span className="text-purple-500">Mí</span>
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p>
                Soy un desarrollador FullStack apasionado por crear experiencias web excepcionales que combinan diseño
                atractivo con funcionalidad robusta. Con experiencia en tecnologías tanto de frontend como de backend,
                disfruto enfrentando desafíos complejos y encontrando soluciones creativas.
              </p>

              <p>
                Mi experiencia incluye el desarrollo de aplicaciones web utilizando React en el frontend y
                Laravel/Node.js en el backend. Me especializo en crear interfaces de usuario intuitivas y responsivas,
                así como en implementar arquitecturas de backend escalables y seguras.
              </p>

              <p>
                Además de mis habilidades técnicas, valoro la comunicación clara, el trabajo en equipo y el aprendizaje
                continuo. Siempre estoy explorando nuevas tecnologías y metodologías para mejorar mis habilidades y
                ofrecer soluciones de mayor calidad.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold text-purple-500 mb-2">Educación</h3>
                <ul className="space-y-2">
                  <li>
                    <p className="font-medium">Ingeniería en Ciencias de la Computacion</p>
                    <p className="text-sm text-foreground/60">Universidad Francisco Gavidia, 2020-2025</p>
                    <p className="font-medium">Desarollador FullStack Jr.</p>
                    <p className="text-sm text-foreground/60">KODIGO | Academia de Tecnología, 2024-2025</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-500 mb-2">Intereses</h3>
                <ul className="space-y-1 text-foreground/80">
                  <li>• Desarrollo Web</li>
                  <li>• Desarrollo Backend</li>
                  <li>• Nuevas Tecnologías</li>
                  <li>• Open Source</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About