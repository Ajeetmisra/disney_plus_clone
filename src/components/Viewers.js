import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/Viewers-disney.png" />
        {/* <video autoPlay={true} playsInline={true} loop={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video> */}
      </Wrap>
      <Wrap>
        <img src="/images/Viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/Viewers-national.png" />
      </Wrap>
      <Wrap>
        <img src="/images/Viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/Viewers-starwars.png" />
      </Wrap>
    </Container>
  );
}

export default Viewers;
const Container = styled.div`
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  cursor: pointer;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 30px 0px 26px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  margin-left: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
  &:hover {
    transform: scale(1.05);
    border-color: 3px solid rgba(249, 249, 249, 0.8);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
