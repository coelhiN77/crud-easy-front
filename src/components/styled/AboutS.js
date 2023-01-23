import styled from "styled-components";

export const AboutContainer= styled.div `
  width: 100%;
  height: 500px;
  text-align: center;
  justify-content: center;
  display: flex;
  border: 1px solid gray;
  box-shadow: 0px 5px 15px ;

  img {
    margin-top: 20px;
    width: 250px;
    border-radius: 500px;
    pointer-events: none;
  }

  h1 {
    font-size: 45px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: crimson;
    margin-bottom: 20px;
  }

  p {
    width: 400px;
    font-size: 22px;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
  }

  span {
    color: red;
    font-weight: bold;
  }
`;


