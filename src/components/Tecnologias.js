import React, { useState } from 'react'; // Certifique-se de importar useState
import { FaReact, FaJs, FaHtml5, FaCss3, FaDatabase, FaCode, FaCloud, FaTools, FaRobot, FaGithub, FaGit, FaGlobe } from 'react-icons/fa';

const Tecnologias = () => {
  const tecnologias = [
    { icon: <FaReact size={48} className='text-blue-500' />, nome: 'React', detalhes: 'Biblioteca JavaScript para construção de interfaces.' },
    { icon: <FaJs size={48} className='text-yellow-500' />, nome: 'JavaScript', detalhes: 'Linguagem de programação para interatividade em páginas web.' },
    { icon: <FaHtml5 size={48} className='text-red-500' />, nome: 'HTML', detalhes: 'Linguagem de marcação para estruturar conteúdo web.' },
    { icon: <FaCss3 size={48} className='text-blue-300' />, nome: 'CSS', detalhes: 'Linguagem para estilização visual de elementos HTML.' },
    { icon: <FaDatabase size={48} className='text-green-500' />, nome: 'MySQL', detalhes: 'Banco de dados relacional para armazenar informações estruturadas.' },
    { icon: <FaCode size={48} className='text-purple-500' />, nome: 'APIs', detalhes: 'Interfaces para comunicação entre diferentes sistemas.' },
    { icon: <FaCloud size={48} className='text-indigo-500' />, nome: 'Azure', detalhes: 'Plataforma de nuvem da Microsoft para serviços e soluções em nuvem.' },
    { icon: <FaTools size={48} className='text-gray-500' />, nome: 'Inventor', detalhes: 'Software de modelagem 3D e projeto mecânico.' },
    { icon: <FaRobot size={48} className='text-green-700' />, nome: 'ChatGPT', detalhes: 'Modelo de linguagem baseado em IA da OpenAI para conversas e geração de texto.' },
    { icon: <FaGit size={48} className='text-orange-600' />, nome: 'Git', detalhes: 'Permite trabalhos com plataformas como Github e Gitlab com mais facilidade' },
    { icon: <FaGithub size={48} className='text-black' />, nome: 'Github', detalhes: 'Plataforma online que armazena códigos e permite desenvolvedores modificar os mesmos.' },
    { icon: <FaGlobe size={48} className='text-blue-500' />, nome: 'Netlify', detalhes: 'Plataforma de hospedagem e implantação contínua para aplicativos da web.' },
  ];

  const [selectedTecnologia, setSelectedTecnologia] = useState(null);

  const handleTecnologiaClick = (index) => {
    if (selectedTecnologia === index) {
      setSelectedTecnologia(null);
    } else {
      setSelectedTecnologia(index);
    }
  };

  return (
    <section className='section py-4' id='contact'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-white'>Tecnologias Recentes</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {tecnologias.map((tecnologia, index) => (
            <div
              key={index}
              className={`border p-4 flex flex-col items-center justify-center text-center bg-gray-100 rounded-lg shadow-md transform hover:scale-105 transition-transform hover:rotate-3 ${selectedTecnologia === index ? 'border-blue-500' : 'border-gray-100'}`}
              onClick={() => handleTecnologiaClick(index)}
            >
              <div className='mb-2'>{tecnologia.icon}</div>
              <span className='text-lg font-semibold text-black'>{tecnologia.nome}</span>
              {selectedTecnologia === index && (
                <div className='opacity-100 transition-opacity duration-300'>
                  <p className='text-sm text-gray-700 mt-2'>{tecnologia.detalhes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
