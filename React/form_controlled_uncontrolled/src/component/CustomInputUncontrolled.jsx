import React from 'react'

const CustomInputUncontrolled = ({name,type,ref}) => {
 return (
    <input
      className="input"
      name={name}
      type={type}
      ref={ref}
    />
  );
}

export default CustomInputUncontrolled
