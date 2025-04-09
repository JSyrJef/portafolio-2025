"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, } from "react-icons/fi"

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form data:", data)
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FiMail className="text-purple-500" />,
      label: "Email",
      value: "perezsanchezjeffersonheriberto@gmail.com",
    },
    {
      icon: <FiMapPin className="text-purple-500" />,
      label: "Ubicación",
      value: "San Salvador, El Salvador",
    },
    {
      icon: <FiPhone className="text-purple-500" />,
      label: "Teléfono",
      value: "+503 7879 4328",
    },
  ]

  const socialLinks = [
    {
      icon: <FiLinkedin size={20} />,
      url: "https://www.linkedin.com/in/jeffersonsanchezhp07/",
      label: "LinkedIn",
    },
    {
      icon: <FiGithub size={20} />,
      url: "https://github.com/JSyrJef",
      label: "GitHub",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-500">Contáctame</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades de colaboración? No dudes en ponerte en
            contacto conmigo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-8 shadow-lg overflow-x-hidden"
          >
            <h3 className="text-xl font-bold mb-6 text-purple-500">Envíame un mensaje</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg bg-background border ${
                    errors.name ? "border-red-500" : "border-purple-500/20"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
                  placeholder="Tu nombre"
                  {...register("name", { required: "El nombre es requerido" })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg bg-background border ${
                    errors.email ? "border-red-500" : "border-purple-500/20"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
                  placeholder="Tu email"
                  {...register("email", {
                    required: "El email es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg bg-background border ${
                    errors.message ? "border-red-500" : "border-purple-500/20"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
                  placeholder="Tu mensaje"
                  {...register("message", { required: "El mensaje es requerido" })}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-300 disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {submitSuccess && (
                <p className="text-green-500 text-center">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </p>
              )}

              {submitError && (
                <p className="text-red-500 text-center">
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 overflow-x-hidden"
          >
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-purple-500">Información de contacto</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{item.label}</p>
                      <p className="font-medium break-all text-wrap">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-purple-500">Sígueme en redes sociales</h3>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact