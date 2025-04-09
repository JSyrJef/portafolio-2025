"use client"

import { motion } from "framer-motion"
import { FaReact, FaLaravel, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGitAlt, FaGithub, FaJava, FaPhp } from "react-icons/fa"
import { SiTailwindcss, SiMysql, SiMongodb, SiJsonwebtokens, SiVite, SiDjango, SiExpress, SiFirebase, SiBootstrap } from "react-icons/si"

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
        { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Laravel", icon: <FaLaravel size={40} className="text-red-500" /> },
        { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
        { name: "Express", icon: <SiExpress size={40} className="text-gray-400" /> },
        { name: "Django", icon: <SiDjango size={40} className="text-green-400" /> },
        { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
        { name: "PHP", icon: <FaPhp size={40} className="text-blue-500" /> },
      ],
    },
    {
      name: "Bases de Datos",
      skills: [
        { name: "MySQL", icon: <SiMysql size={40} className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
        { name: "FireBase", icon: <SiFirebase size={40} className="text-orange-500" /> },
      ],
    },
    {
      name: "Herramientas",
      skills: [
        { name: "Docker", icon: <FaDocker size={40} className="text-blue-500" /> },
        { name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
        { name: "Github", icon: <FaGithub size={40} className="text-black-500" /> },
        { name: "Vite", icon: <SiVite size={40} className="text-purple-500" /> },
        { name: "JsonWebTokens", icon: <SiJsonwebtokens size={40} className="text-red-500" /> },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-purple-500">Habilidades</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Un conjunto de tecnologías y herramientas que domino y utilizo para desarrollar soluciones web modernas y
            eficientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-purple-500 border-b border-purple-500/20 pb-2">
                {category.name}
              </h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-purple-500/5 transition-colors duration-300"
                  >
                    {skill.icon}
                    <span className="mt-2 text-foreground/80">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills