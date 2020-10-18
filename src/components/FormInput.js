import React from "react";
import "../assets/css/FormInput.css"

function FormInput() {
    return (
        <form>
            <label for = "caption">ราคาแรกซื้อ</label><br></br>
                <input style={{paddingRight:"100px" }}placeholder="10,000" /><span style={{marginLeft:"-50px"}}>บาท/ปี</span>
        </form>
    );
}
  
export default FormInput;