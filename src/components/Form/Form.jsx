import React from "react";
import './Form.css';
import { Link } from "react-router-dom";

export default function Form(props) {

    return (
        <React.Fragment>

            <div className={props.col}>

                <label className="form-label" for={props.for}>{props.label}</label>
                <input type={props.type} className="form-control" placeholder={props.placeholder} id={props.for} required />
                
            </div>

        </React.Fragment> 
    )

}