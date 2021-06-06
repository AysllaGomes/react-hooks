import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const nome = useForm();
  const cep = useForm('cep');
  const email = useForm('email');
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />

      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="99999-999"
        {...cep}
      />

      <Input
        label="E-mail"
        id="email"
        type="email"
        placeholder="example@email.com"
        {...email}
      />

      <button>Enviar</button>
    </form>
  );
};

export default App;
