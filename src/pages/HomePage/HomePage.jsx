import styled from "styled-components";
import ImageComponent from "../../components/ImageComponent";

export default function HomePage() {
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        <ImageComponent />
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 100px;
  padding-top: 70px;
`;

const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;
