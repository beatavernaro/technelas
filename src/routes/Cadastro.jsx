import '../App.css';
import React from 'react';
import { Form, Button } from '../components/';
import { Link } from "react-router-dom";


export default function Cadastro() {
  return (
    <React.Fragment>
      <main className="main-bg-color pb-5">
        <div className="container pt-5">
          <div className="container col-md-10 m-auto px-4 pb-4 box-form-style pt-4">
            <h1 className="mb-3 text-center">Cadastre-se</h1>
            <form className="row g-3" action="#" method="post">

              <Form label="Nome Completo" for="nomeCompleto" placeholder="Anne Arendell" col="col-12" type="text" required="true" />
              <Form label="E-mail" for="email" placeholder="seuemail@email.com.br" col="col-md-10" type="email" />
              <Form label="Senha" for="senha" col="col-6" type="password" />
              <Form label="Confirme sua senha" for="senhaConfirma" col="col-md-6" type="password" />
              <p class="form-text">A senha deve conter no mínimo 8 caracteres.</p>
              <Form label="Data de nascimento" for="dataNascimento" id="dataNascimento" col="col-md-6" type="date" />
              <Form label="Genero" for="genero" col="col-md-6" type="text" />
              
              <Form label="Foto de perfil" for="fotoPerfil" col="col-md-6" type="file" />
              <div class="col-md-6">
                <label for="inputState" class="form-label">PCD</label>
                <select id="selectPcd" class="form-select">
                  <option selected disabled>...</option>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </div>
              <Form label="Telefone" for="telefone" col="col-md-6" type="number" placeholder="(00) 12345-6789" />
              <Form label="Linkedin" for="linkedin" col="col-md-6" type="text" placeholder="http://www.linkedin.com/seuUsuario" />
              <Form label="Portfólio" for="portfolio" col="col-md-6" type="text" placeholder="Link para seu portfolio" />
              <Form label="Outros links" for="outrosLinks" col="col-md-6" type="text" placeholder="Outros links que julgar necessário" />
              <div class="col-md-6">
                <label for="selectIngles" class="form-label">Inglês</label>
                <select id="selectIngles" class="form-select">
                  <option selected>Básico</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                  <option>Fluente</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="selectEspanhol" class="form-label">Espanhol</label>
                <select id="selectEspanhol" class="form-select">
                  <option selected>Básico</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                  <option>Fluente</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="selectSituacaoProfissional" class="form-label">Situação profissional</label>
                <select id="selectSituacaoProfissional" class="form-select">
                  <option selected>Início de carreira, em busca da 1ª oportunidade</option>
                  <option>Transição de carreira, em busca da 1ª oportunidade</option>
                  <option>Já empregada na área de TI</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="selectSenioridade" class="form-label">Senioridade atual</label>
                <select id="selectSenioridade" class="form-select">
                  <option selected>Estagiária</option>
                  <option>Júnior</option>
                  <option>Pleno</option>
                  <option>Senior</option>
                </select>
              </div>
              <div class="col-6">
                <label for="selectLocal" class="form-label">Preferência por local de trabalho</label>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="selectRemoto" />
                  <label class="form-check-label" for="gridCheck1">Remoto</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="selectHibrido" />
                  <label class="form-check-label" for="gridCheck1">Hibrido</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="selectPresencial" />
                  <label class="form-check-label" for="gridCheck1">Presencial</label>
                </div>
              </div>
            </form>
            <Link to='/habilidade' class="nav-link px-2 text-muted"><Button text="Avançar" /></Link>

          </div>

        </div>
      </main >
    </React.Fragment >
  );
}

