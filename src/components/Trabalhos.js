import React from 'react';
import { FaCode, FaWalking, FaBaby, FaGamepad, FaPrescriptionBottle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import cuidadoresLogo from '../assets/cuidadoresLogo.png';
import sharkcolor from '../assets/sharkcolor.png';
import Esteira from '../assets/Esteira.jpg';
import cuidadores from '../assets/cuidadores.png';
import Monstros from '../assets/Monstros.png';
import branco from '../assets/branco.jpg';

const servicesData = [
  // ... objetos de serviço ...
  {
    icon: <FaCode />,
    title: 'Portfólio <html>',
    description: 'Eu desenvolvi este mesmo portfólio em HTML e CSS. Dê uma olhada.',
    link: 'https://thiagocruz.netlify.app/',
    image: sharkcolor,
  },
  {
    icon: <FaPrescriptionBottle />,
    title: 'Esteira para teste de qualidade',
    description: 'Esse dispositivo foi criado em equipe no curso técnico em eletromecânica.',
    link: 'https://cad.onshape.com/signin',
    image: Esteira,
  },
  {
    icon: <FaBaby />,
    title: 'Site Cuidadores',
    description: 'Este foi um projeto que desenvolvi no curso técnico em desenvolvimento de sistemas.',
    link: 'https://cuidadores.netlify.app/',
    image: cuidadoresLogo,
  },
  {
    icon: <FaBaby />,
    title: 'Artigo Cuidadores',
    description: 'Este foi o artigo técnico que eu e meus colegas escrevemos para ganharmos o título de desenvolvedores de sistemas.',
    link: 'https://cuidadores.netlify.app/',
    image: cuidadores,
  },
  {
    icon: <FaGamepad />,
    title: 'Jogo Três Chances',
    description: 'Esse foi o jogo que fizemos para desenvolver nossa habilidade em desenvolvimento C#.',
    link: 'https://github.com/Thiago163/Jogo_tres_chances',
    image: Monstros,
  },
  {
    icon: <FaWalking />,
    title: 'Esperando Mais Conteúdo',
    description: 'Vazio.',
    link: 'https://cruzthiago.netlify.app/',
    image: branco,
  },
  {
    icon: <FaWalking />,
    title: 'Esperando Mais Conteúdo',
    description: 'Vazio.',
    link: 'https://cruzthiago.netlify.app/',
    image: branco,
  },
  {
    icon: <BsArrowRight />,
    title: 'Ver Mais',
    description: 'Clique aqui para ver mais trabalhos.',
    link: 'https://thiagocruz.netlify.app/',
    image: branco,
  },
];

const ServiceCard = ({ icon, title, description, link, image }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='bg-white rounded-lg p-6 shadow-lg cursor-pointer'>
      <div className='relative'>
        <img src={image} alt={title} className='absolute top-0 right-0 w-20 h-auto rounded-md' />
        <div className='flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4'>
          {icon}
        </div>
      </div>
      <h3 className='text-xl font-semibold text-black mb-1 mt-5'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </a>
  );
};

const Trabalhos = () => {
  return (
    <section className='section' id='services'>
      <style jsx>
        {`
          @media screen and (max-width: 1024px) {
            #services {
              margin-top: 190px;
              margin-bottom: 190px;
            }
          }
        `}

        {`
          @media screen and (max-width: 700px) {
            #services {
              margin-top: 1px;
              margin-bottom: 10px;
            }
          }
        `}

        {`
          @media screen and (max-width: 1200px) {
            #services {
              margin-top: 20px;
              margin-bottom: 20px;
            }
          }
        `}

        {`
          @media screen and (max-height: 600px) {
            #services {
              margin-top: 200px;
              margin-bottom: 200px;
            }
          }
        `}

        {`
          @media screen and (max-height: 800px) {
            #services {
              margin-top: -100px;
              margin-bottom: -100px;
            }
          }
        `}

        {`
          @media screen and (max-width: 667px) {
            #services {
              margin-top: 5px;
              margin-bottom: 5px;
            }
          }
        `}
        
        {`
          @media screen and (max-width: 900px) {
            #services {
              margin-top: 20px;
              margin-bottom: 20px;
            }
          }
        `}

        {`
          @media screen and (width: 1024px) {
            #services {
              margin-top: 200px;
              margin-bottom: 300px;
            }
          }
        `}

        {`
          @media screen and (width: 1481.6px) {
            #services {
              margin-top: 20px;
              margin-bottom: 20px;
            }
          }
        `}

        {`
          @media screen and (width: 1280px) {
            #services {
              margin-top: 20px;
              margin-bottom: 15px;
            }
          }
        `}

        {`
          @media screen and (width: 1536px) {
            #services {
              margin-top: 20px;
              margin-bottom: 25px;
            }
          }
        `}

      </style>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-9'>Meus Trabalhos</h2>
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
