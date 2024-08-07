import React, { useState } from "react";
import styled from "styled-components";

function InputComponent() {
  const [value, setValue] = useState(""); // Initialize with empty string or any default value

  const [handleChangeCount, setHandleChangeCount] = useState(0);

  const handleChange = (e) => {
    setHandleChangeCount((prev) => prev + 1);
    const newValue = e.target.value;

    if (newValue.length <= 1 && /^[a-zA-Z]*$/.test(newValue)) {
      setValue(newValue);
    } else if (newValue.length > 1) {
      // If more than one character is entered, take the last character
      const lastChar = newValue.slice(-1);
      if (/^[a-zA-Z]$/.test(lastChar)) {
        setValue(lastChar);
      }
    }
  };

  return (
    <Wrapper>
      <input type="text" value={value} onChange={handleChange} />
      <p>The input value: {value}</p>

      <p>Number of times onChange fired: {handleChangeCount}</p>
    </Wrapper>
  );
}

export default InputComponent;

const Wrapper = styled.div`
  margin-top: 2rem;
  input {
    font-size: 1rem;
  }
  p {
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
