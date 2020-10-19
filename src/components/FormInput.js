import React from "react";
import "../assets/css/FormInput.css"

function FormInput() {
    return (
        // <form>
        //     <label for = "caption">ราคาแรกซื้อ</label><br></br>
        //         <input style={{paddingRight:"100px" }}placeholder="10,000" /><span style={{marginLeft:"-50px"}}>บาท/ปี</span>
        // </form>
        <form>
            <div class="input-group">
                <label >ff</label><br></br>
                <input type="text" class="form-control" placeholder="ราคาแรกซื้อ"></input>
                <div class="input-group-btn">
                    {/* <button class="btn btn-default" type="submit"> */}
                        <span class="">gg</span>
                    {/* </button> */}
                </div>
            </div>
        </form>

    );
}
  
export default FormInput;