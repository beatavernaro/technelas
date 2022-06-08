import React from "react";
import './Checkbox.css';

export default function Checkbox(props) {
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id={props.for} />
            <label class="form-check-label" for={props.for}>{props.skill}</label>
        </div>
    )

}