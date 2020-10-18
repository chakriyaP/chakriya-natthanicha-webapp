import React from "react";
import "../assets/css/ButtonForForm.css"

function ButtonForForm() {
    return (
        <form >
            <input className = "buttonfor back" type = "Button" value = "ย้อนกลับ"></input>
            <input className = "buttonfor next" type = "Button" value = "ถัดไป"></input>
        </form>
    );
}
export default ButtonForForm;