import styled from "styled-components";

export const Container = styled.div `
  width: 100vw;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  list-style-type: none;
  box-shadow: 0 5px 5px -1px gray;

  img {
    display: flex;
    margin-left: 30px;
    width: 250px;
    pointer-events: none;
  }

  ul, li {
    list-style: none;
    font-size: 25px;
    display: inline-block;
    margin: 0 20px;
    position: relative;
    list-style-type: none;
    margin-right: 50px;
  }

  ul li::after {
    content: '';
    height: 3px;
    width: 0;
    background: crimson;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: 0.5s;
  }

  ul li:hover::after{
    width: 100%;
  }
`;