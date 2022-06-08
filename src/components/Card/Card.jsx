import React from "react";
import './Card.css';
import cardIcon1 from './iconcard1.png';
import { Link } from "react-router-dom";

export default function Card(props) {

    return (
        
            <div className="card cards-container-bg col-md-3 col-11">
                <div className="content">
                    <div className="imgBx">
                        <img src={cardIcon1} /> {/* COMO COLOCO OUTRAS IMAGENS AQUI*/}
                    </div>
                    <div className="contentBx">
                        <h3 className="card-text-size">{props.cardName}</h3>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                        <Link to="/cadastro" className="style-hover-card">Cadastre-se</Link>
                    </li>
                </ul>
            </div>

    )

}