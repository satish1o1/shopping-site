import React from "react";
import './form-input.styles.scss'

const FormInput = ({ onChangeHandler, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={onChangeHandler}
           {...otherProps}
           required
      />
        {label ?
           (<label className= {`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
             {label}
           </label>)
           : null}
    </div>
  );
};

export default FormInput;
