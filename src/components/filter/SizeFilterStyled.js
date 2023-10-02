import styled from "styled-components";

export const SizeStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  height: 120px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const SizeBtn = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  margin: 5px;
  border: 2px solid #000;
  cursor: pointer;
`;

export const Titlecontainer = styled.div`
  @media screen and (max-width: 1000px) {
    margin-left: 50px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 0px 4px 18px 10px rgba(44, 201, 212, 0.41);
  -webkit-box-shadow: 0px 4px 18px 10px rgba(44, 201, 212, 0.41);
  -moz-box-shadow: 0px 4px 18px 10px rgba(44, 201, 212, 0.41);

  @media screen and (max-width: 1000px) {
    width: 50%;
    height: 100px;
    align-items: flex-start;
  }
`;

export const ViewCartBtn = styled.button`
  width: 120px;
  height: 50px;
  margin: 40px;
  color: white;
  background-color: darkslateblue;
  border: none;
  cursor: pointer;
`;
