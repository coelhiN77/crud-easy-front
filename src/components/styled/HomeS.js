import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  display: flex;

  img {
    width: 500px;
  }
`;

export const ContactLeft = styled.div `
  width: 50%;
`;

export const ContactRight = styled.div `
  margin-top: 20px;
  margin-left: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Button = styled.div `
  button {
  cursor: pointer;
  border-radius: 4px;
  background-color: #FF0000;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 32px;
  padding: 16px;
  width: 220px;
  transition: all 0.5s;
  margin: 36px;
  letter-spacing: 2px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
  }

  button{
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  button:after {
    content: '»';
    position: absolute;
    opacity: 0;  
    top: 14px;
    right: -20px;
    transition: 0.5s;
  }

  button:hover{
    padding-right: 24px;
    padding-left:8px;
  }

  button:hover:after {
    opacity: 1;
    right: 10px;
  }
`;