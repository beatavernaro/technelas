import '../App.css';
import React from 'react';
import { Checkbox, Button } from '../components';
import { Link } from "react-router-dom";


export default function CadHabilidade() {
  var teste = ["skill 1", "skill 2", "skill 3"]
  var skills
  for (let i = 0; i <= 2; i++) {
    skills = teste[i];
  }

    return (
      <React.Fragment>
        <main className="main-bg-color pb-5">
          <div className="container pt-5">
            <div className="container col-md-10 m-auto px-4 pb-4 box-form-style pt-4">
              <h1 className="mb-3 text-center">Cadastre-se</h1>


              <label for="" class="form-label ">
                <h4 className="mb-3 ">Habilidades Front-End</h4>
              </label>
              <div className="col-md-6">

                <Checkbox for="skill1" skill={skills} />
              </div>
              <Link to='/perfil' class="nav-link px-2 text-muted"><Button text="Enviar" /></Link>

            </div>

          </div>
        </main >
      </React.Fragment >
    );
  
}

