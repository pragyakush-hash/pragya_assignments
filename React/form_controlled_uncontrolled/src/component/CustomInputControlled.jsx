import React, { useState } from "react";

const CustomInputControlled = ({
  handleBeforeChange = () => {},
  handleAfterChange = () => {},
  value,
  type,
  name,
  ...props
} = {}) => {

  const handleChange = (e)=>{
    if(handleBeforeChange){
      handleBeforeChange(e)
    }
    if(handleAfterChange){
      handleAfterChange(e)
    }
  }



  return (
    <input
      className="input"
      onChange={handleChange}
      value={value}
      name={name}
      type={type}
            {...props}

    />
  );
};

export default CustomInputControlled;
