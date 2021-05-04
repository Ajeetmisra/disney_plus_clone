import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6370/936370-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5126/675126-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5219/875219-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5085/875085-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7698/727698-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/655/980655-v"
            alt=""
          />
        </Wraper>
      </Content>
      <h4>New To Disney+</h4>
      <Content>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/116/980116-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/525/820525-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3076/183076-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5029/685029-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1219/871219-v"
            alt=""
          />
        </Wraper>
        <Wraper>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/655/980655-v"
            alt=""
          />
        </Wraper>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 10px;
  padding: 30px 0px 26px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wraper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    &:hover {
      transform: scale(1.05);
      border-color: 3px solid rgba(249, 249, 249, 0.8);
      transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
`;
