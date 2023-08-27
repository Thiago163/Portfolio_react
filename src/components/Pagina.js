import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <section className='bg-gray-100 py-16' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center lg:space-x-12'>

          <div className='lg:w-2/5'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-4 leading-tight text-black'>
              Olá, eu sou <span className='text-accent'>Thiago Cruz</span>
            </h1>
            <div className='text-lg lg:text-xl text-gray-700 font-medium'>
              <span className='mr-2'>Sou um programador:</span>
              <TypeAnimation
                sequence={['Front-end', 2000, 'Back-end', 2000]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </div>
          </div>

          <div className='flex flex-col gap-6 lg:w-2/5'>
            {/* Seção de boas-vindas */}
            <div className='flex items-start'>
              <div>
                <h3 className='text-xl font-semibold text-black mb-2'>Bem-vindo(a) à minha página</h3>
                <p className='text-gray-600'>
                  Fico feliz em ter você aqui. Explore e saiba mais sobre mim e meu trabalho.
                </p>
              </div>
            </div>
            
            {/* Seção de formação */}
            <div className='flex items-start'>
              <div>
                <h3 className='text-xl font-semibold text-black mb-2'>Formação</h3>
                <p className='text-gray-600'>
                  Sou formado em Técnico em Eletromecânica e atualmente estou estudando Análise e Desenvolvimento de Sistemas na UNIP.
                </p>
              </div>
            </div>
          </div>

          {/* Links sociais */}
          <div className='flex justify-center lg:justify-end mt-10 lg:mt-0'>
            <a href='https://github.com/Thiago163' className='text-accent text-4xl md:text-5xl lg:text-6xl'>
              <FaGithub className='ml-1' />
            </a>
            <a href='https://www.instagram.com/thiagocruz163/?igshid=ZDdkNTZiNTM%3D' className='text-accent text-4xl md:text-5xl lg:text-6xl ml-4'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/in/thiago-cruz163' className='text-accent text-4xl md:text-5xl lg:text-6xl ml-4'>
              <FaLinkedin />
            </a>
            <a href='https://wa.me/qr/EUMZHUCMKY32B1' className='text-accent text-4xl md:text-5xl lg:text-6xl ml-4'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
