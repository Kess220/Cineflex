import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const SuccessPage = () => {
  const location = useLocation();
  const { movieTitle, session, selectedSeats, buyerName, buyerCPF } =
    location.state || {};

  return (
    <PageContainer>
      <Heading>Pedido feito com sucesso!</Heading>

      <TextContainer data-test="movie-info">
        <strong>Filme e sessão</strong>
        <p>{movieTitle}</p>
        <p>{session}</p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>Ingressos</strong>
        {selectedSeats &&
          selectedSeats.map((seat) => <p key={seat}>Assento {seat}</p>)}
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>Comprador</strong>
        <p>Nome: {buyerName}</p>
        <p>CPF: {buyerCPF}</p>
      </TextContainer>

      <Link to="/">
        <Button data-test="go-home-btn">Voltar para Home</Button>
      </Link>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  color: #293845;
  margin: 30px 20px;
  padding-bottom: 120px;
  padding-top: 70px;
  a {
    text-decoration: none;
  }
`;

const Heading = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #247a6b;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  strong {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  margin-top: 50px;
`;

export default SuccessPage;
