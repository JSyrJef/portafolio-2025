import { FiGithub, FiLinkedin} from "react-icons/fi"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FiLinkedin size={18} />,
      url: "https://www.linkedin.com/in/jeffersonsanchezhp07/",
      label: "LinkedIn",
    },
    {
      icon: <FiGithub size={18} />,
      url: "https://github.com/JSyrJef",
      label: "GitHub",
    },
  ]

  return (
    <footer className="py-8 border-t border-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-purple-500">
              <span className="text-xl">{"<"}</span>
              Jefferson Sanchez
              <span className="text-xl">{"/>"}</span>
            </a>
            <p className="text-sm text-foreground/60 mt-1">&copy; {currentYear} Todos los derechos reservados.</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center hover:bg-purple-500/20 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer