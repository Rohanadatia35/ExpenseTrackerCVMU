import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { plus, update } from "../../utils/Icons";

function NumberLimitPage() {
  const { getLimit, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({ limit: "" });

  const { category, limit } = inputState;

 const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '') {
      setInputState({ ...inputState, limit: value }); // Update the limit in the inputState
      setError(''); // Clear any previous error
    }
  };
  const handleInput = (name) => (e) => {
    setInputState({...inputState, [e.target.name]: e.target.value});
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getLimit(inputState);
    setInputState({
        limit
    })
  };

  return (
    <NumberLimitPageStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <h2>Enter Expense Limit</h2>
      <div className="input-control">
        <input
          type="text"
          value={limit}
          name={"limit"}
          placeholder="Enter expense limit"
          onChange={handleChange}
        />
      </div>

      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}>
            <option value="" disabled selected>Select Category</option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>  
            <option value="travelling">Travelling</option>  
            <option value="other">Other</option>  
        </select>
      </div>
      <div className="submit-btn">
        <Button
          name={"Update"}
          icon={update}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </NumberLimitPageStyled>
  );
}

const NumberLimitPageStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;                               
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: black;
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    display:flex;
    align-item:center;
      width: 25%;
  }

  .selects {
    display: flex;
    align-item:center;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;

export default NumberLimitPage;
