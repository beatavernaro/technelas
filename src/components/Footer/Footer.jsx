import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

export default function Card() {
    return (
        <footer class="container-fluid main-bg-color">
        <div class="py-3 ">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3 fs-5 gap-4">
                <li class="nav-item "><Link to='/' class="nav-link px-2 text-muted">Início</Link></li>
                <li class="nav-item"><Link to='/cadastro' class="nav-link px-2 text-muted">Cadastre-se</Link></li>
                <li class="nav-item"><Link to='/login' class="nav-link px-2 text-muted" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Log in</Link></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Vagas</a></li>
                <li class="nav-item"><Link to='/about' class="nav-link px-2 text-muted">Sobre</Link></li>
            </ul>
            <p class="text-center text-muted fs-5">© Criado por Beatriz Tavernaro para o curso de Full Stack Development
                na
                Tera</p>
        </div> 
    </footer>
    )

}