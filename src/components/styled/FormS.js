import styled from "styled-components";

export const FormContainer = styled.form`
  width: 770px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px 10px #ccc;
  border-radius: 5px;
  margin: 20px auto;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input `
  width: 120px;
  padding: 0 10px;
  border: 2px solid #bbb;
  border-radius: 5px;
  height: 40px;
  outline: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
  color: blue;
`;

export const Label = styled.label`
  color: crimson;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Button = styled.button `
  display: flex;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  margin-left: 38%;
  cursor: pointer;

  p {
    margin-right: 7px;
  }

  :hover {
    color: #90ee90;
  }
`;

export const Button2 = styled.div `
  display: flex;
  padding: 10px;
  background-color: black;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  p {
    color: white;
  }

  p:hover {
    color: crimson;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  text-align: center;
`;