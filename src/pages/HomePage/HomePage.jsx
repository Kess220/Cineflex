import styled from "styled-components";
import ImageComponent from "../../components/ImageComponent";

const HomePage = () => {
  return (
    <>
      <NavContainer>CINEFLEX</NavContainer>

      <PageContainer>
        Selecione o filme
        <ListContainer>
          <ImageComponent />
        </ListContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;
const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
`;

const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

export default HomePage;
