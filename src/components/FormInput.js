
import "../assets/css/navigationBar.css";
import NumberFormat from "react-number-format";

const FormInput = (props) => {
  const { nameLable, nameInput, placeholder, unit,  onChange, value ,background} = props;

  return (
    <div className=" pl-5 pr-5 p-3" style={{backgroundColor:background}}>
      <label htmlFor={nameInput}>{nameLable}</label>
      <div className="input-group ">
        <NumberFormat
          id={nameInput}
          name={nameInput}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          thousandSeparator={true}
          required
                  
        />
        <div className="input-group-append">
          <span className="input-group-text primary-bg">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export const FormInputDisabled = (props) => {
  const { nameLable, nameInput, placeholder, unit,  onChange, value } = props;

  return (
    <div className="form-group" >
      <label htmlFor={nameInput}>{nameLable}</label>
      <div className="input-group ">
        <NumberFormat
          id={nameInput}
          name={nameInput}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          thousandSeparator={true}
          disabled
          value={value}
        />
        <div className="input-group-append">
          <span className="input-group-text primary-bg">{unit}</span>
        </div>
      </div>
    </div>
  );
};
export default FormInput;
