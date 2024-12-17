import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'antoine.pascault@outlook.fr',
      href: 'mailto:antoine.pascault@outlook.fr'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '07 68 43 90 41',
      href: 'tel:+330768439041'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Dijon, France'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/antoinepascault'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/antoine-pascault-66b1b5290/'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      theme === 'light' ? 'bg-[#f0f0e8]' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Me Contacter
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className={`backdrop-blur-sm p-8 rounded-2xl ${
            theme === 'light'
              ? 'bg-white/80 border-2 border-gray-100 shadow-lg shadow-gray-100/20'
              : 'bg-gray-900/50 border-2 border-gray-800'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>Informations de Contact</h3>
            
            {/* Contact Details */}
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    theme === 'light'
                      ? 'bg-gradient-to-br from-blue-100 to-purple-100'
                      : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
                  }`}>
                    <info.icon className={`w-6 h-6 ${
                      theme === 'light' ? 'text-blue-600' : 'text-blue-500'
                    }`} />
                  </div>
                  <div>
                    <h4 className={
                      theme === 'light' ? 'text-gray-600 text-sm' : 'text-gray-300 text-sm'
                    }>{info.label}</h4>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className={`hover:text-blue-500 transition-colors ${
                          theme === 'light' ? 'text-gray-800' : 'text-white'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={
                        theme === 'light' ? 'text-gray-800' : 'text-white'
                      }>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={
                theme === 'light' ? 'text-gray-600 mb-4' : 'text-gray-300 mb-4'
              }>Réseaux Sociaux</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all group ${
                      theme === 'light'
                        ? 'bg-gradient-to-br from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200'
                        : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30'
                    }`}
                    aria-label={link.label}
                  >
                    <link.icon className={`w-6 h-6 group-hover:scale-110 transition-transform ${
                      theme === 'light' ? 'text-blue-600' : 'text-blue-500'
                    }`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}