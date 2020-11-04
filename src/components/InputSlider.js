import React from "react";


const InputSlider = () => {
  return (
    <div class="slidecontainer">
      <div class="form-group">
        <label for="formControlRange">Example Range input</label>
        <input
          type="range"
          class="form-control-range slider "
          id="formControlRange"
          value="50"
        //   orient="vertical" 
        />
      
      </div>
    </div>
  );
};

export default InputSlider;
