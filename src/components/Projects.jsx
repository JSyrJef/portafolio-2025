"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { DiAndroid } from "react-icons/di";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Sistema de Notas para Instituciones Educativas",
      description:
        "Un sistema completo desarrollado en Java para la gestión de notas académicas con funcionalidades como login/register, administración y CRUDs de alumnos, notas, materias y usuarios.",
      image: "/source/Picture1.webp?height=600&width=800",
      technologies: [
        "Java",
        "JSP",
        "Servlets",
        "MySQL",
        "CSS",
        "SweetAlert",
        "Bootstrap",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/JSyrJef/sistema-de-notas-",
    },
    {
      id: 2,
      title: "MiniChat Realtime",
      description:
        "Un sistema de chat en tiempo real desarrollado con React, Tailwind CSS y Firebase. Incluye autenticación, gestión de datos en tiempo real y diseño moderno.",
      image: "/source/Picture2.webp?height=600&width=800",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      liveUrl: "https://jsyrjef.github.io/minichat-realtime/",
      githubUrl: "https://github.com/JSyrJef/minichat-realtime",
    },
    {
      id: 3,
      title: "WebApp FullStack para Gestión de Usuarios",
      description:
        "Desarrollo de una aplicación web gestionar usuarios, con funcionalidades como registro, autenticación, CRUD de usuarios y generación de reportes diarios, semanales y mensuales.",
      image: "/source/Picture3.webp?height=600&width=800",
      technologies: ["Laravel", "React", "Tailwind CSS", "MySQL", "Axios"],
      liveUrl: "#",
      githubUrl: "https://github.com/JSyrJef/user-management-app",
    },
    {
      id: 4,
      title: "Sistema de Administración de Recompensas por Rachas de TikTok",
      description:
        "Desarrollo de una aplicación para negocios que permite crear, gestionar y aplicar promociones basadas en las rachas de TikTok de los clientes. La app registra usuarios, valida su actividad en TikTok y asigna recompensas, con roles para administradores y dependientes.",
      image: "/source/Picture5.webp?height=600&width=800",
      technologies: [
        "Django",
        "Axios",
        "JWT",
        "PostgreSQL",
        "React Native",
        "CSS (StyleSheet)",
      ],
      githubUrl: "https://github.com/JSyrJef/app-de-rachas",
      isMobile: true, // Indica que es un proyecto móvil
      mobileDemoUrl:
        "https://drive.google.com/uc?export=download&id=1EHrETQYTcgv3wjCOAJ_XT65Rfx7cPiw2",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-purple-500">Proyectos</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados que
            demuestran mis habilidades y experiencia como desarrollador
            FullStack.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground/70 hover:text-purple-500 transition-colors duration-300"
                  >
                    <FiGithub /> Código
                  </a>
                  {project.isMobile ? (
                    project.mobileDemoUrl ? (
                      <a
                        href={project.mobileDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-foreground/70 hover:text-purple-500 transition-colors duration-300"
                      >
                        <DiAndroid /> Demo Android App
                      </a>
                    ) : (
                      <span className="flex items-center gap-1 text-foreground/40 italic">
                        <DiAndroid /> Sin Demo Android App
                      </span>
                    )
                  ) : project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-foreground/70 hover:text-purple-500 transition-colors duration-300"
                    >
                      <FiExternalLink /> Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-foreground/40 italic">
                      <FiExternalLink /> Sin Demo
                    </span>
                  )}
                </div>
              </div>

              {/* Highlight border when active */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-500 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
