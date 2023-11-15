import { useState } from "react";
import styled from "styled-components";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const StyledButton = styled.button`
    margin-inline: auto;
    width: 100px;
    height: 60px;
    border-radius: 9999px;
    border: none;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    display: block;
    background-color: ${({isSelected}) => (isSelected ? "red" : "green")};
  `;

  return (
    <>
      <StyledButton onClick={clickHandler}>
        ボタン
      </StyledButton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
