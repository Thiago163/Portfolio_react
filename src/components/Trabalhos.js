import React from 'react';
import { FaCode, FaMobileAlt, FaSearch, FaPaintBrush, FaWalking } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaCode />,
    title: 'Site Cuidadores',
    description: 'Este foi um projeto que desenvolvi no curso técnico em desenvolvimento de sistemas.',
    link: 'https://thiagocruz.netlify.app/',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Esteira para teste de qualidade',
    description: 'Esse dispositivo foi criado em equipe no curso técnico em eletromecânica.',
    link: 'https://thiagocruz.netlify.app/',
  },
  {
    icon: <FaSearch />,
    title: 'Artigo Cuidadores',
    description: 'Este foi o artigo técnico que eu e meus colegas escrevemos para ganharmos o título de desenvolvedores de sistemas.',
    link: 'https://thiagocruz.netlify.app/',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Portfólio <html>',
    description: 'Eu desenvolvi este mesmo portfólio em HTML e CSS. Dê uma olhada.',
    link: 'https://thiagocruz.netlify.app/',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Jogo Três Chances',
    description: 'Esse foi o jogo que fizemos para desenvolver nossa habilidade em desenvolvimento C#.',
    link: 'https://thiagocruz.netlify.app/',
  },
  {
    icon: <FaWalking />,
    title: 'Esperando Mais Conteúdo',
    description: 'Vazio.',
  },
  {
    icon: <FaWalking />,
    title: 'Esperando Mais Conteúdo',
    description: 'Vazio.',
  },
  {
    icon: <FaWalking />,
    title: 'Esperando Mais Conteúdo',
    description: 'Vazio.',
  },
];

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='bg-white rounded-lg p-6 shadow-lg cursor-pointer'>
      <div className='flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4'>
        {icon}
      </div>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </a>
  );
};

const Trabalhos = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-8'>Meus Trabalhos</h2>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trabalhos;