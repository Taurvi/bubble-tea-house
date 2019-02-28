import React from 'react';

const FormGroupWithLabel = (props) => (
  <div className="form-group">
    <label htmlFor={props.inputId}>{props.label}</label>
    {props.children}
</div>
);

export default FormGroupWithLabel;