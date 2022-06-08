import React from "react";
import './Landing.css';
import mainImage from './main-img-woman.png';

export default function Lading(){ 
    return (
        <section className="main-bg-color border-color">
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={mainImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                            width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6 text-color">
                        <h1 className="display-5 fw-bold lh-1 mb-5 pt-3 animate__animated animate__fadeIn">Aqui vai uma
                            texto com dados para chamar atenção
                        </h1>
                        <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex lacus,
                            posuere
                            quis ultrices id, sodales at nibh. Donec sagittis aliquam tortor, vel pharetra eros
                            convallis interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-lg px-4 me-md-2 w-75 py-3"
                                id="btn-action" href="#">Faça parte
                                dessa
                                mudança</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}