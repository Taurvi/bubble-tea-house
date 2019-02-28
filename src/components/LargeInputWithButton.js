import React from 'react';

const LargeInputWithButton = (props) => (
  <div className="input-group input-group-lg">
    <input type="text" className="form-control" id={props.id} placeholder={props.placeholder}/>
    <div className="input-group-append">
      <button className="btn btn-success" type="button">{props.buttonLabel}</button>
    </div>
  </div>
);

export default LargeInputWithButton;