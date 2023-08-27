import React from 'react';
import Image from '../assets/avatar.png';

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='container mx-auto flex flex-col-reverse items-center justify-center gap-8 lg:flex-row'>
        <div className='max-w-md text-center lg:text-left relative p-6 lg:p-8 shadow-md'>
          <div className='bg-white rounded-lg p-4 absolute top-0 left-0 right-0 bottom-0 z-0'></div>
          <h2 className='text-4xl lg:text-6xl font-bold mb-4 lg:mb-8 text-purple-900 relative z-10'>Sobre Mim</h2>
          <p className='text-lg lg:text-2xl text-black relative z-10'>
            Olá! Sou um apaixonado por programação, design e tecnologia, buscando sempre criar soluções originais.
            Minha trajetória começou na eletromecânica, mas logo me encantei pelo vasto universo da tecnologia.
            Até agora, meu foco está em bancos de dados, desenvolvimento front-end e governança.
          </p>
        </div>
        <div className='max-w-xs mx-auto lg:mx-0'>
          <img src={Image} alt='Minha Foto' className='rounded-full shadow-lg' />
        </div>
      </div>
    </section>
  );
};

export default About;