import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData);
    // Limpar o formulário após o envio
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className='section py-4' id='contact'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>Entre em Contato</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Seu Nome'
            className='border p-2'
            required
          />
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Seu E-mail'
            className='border p-2'
            required
          />
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Sua Mensagem'
            rows='4'
            className='border p-2'
            required
          />
          <button
            type='submit'
            className='bg-purple-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;