import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const SuccessPage = () => {
  const location = useLocation();
  const { movieTitle, session, selectedSeats, buyerName, buyerCPF } =
    location.state || {};
  console.log(movieTitle);

  return (
    <PageContainer>
      <h1>Pedido feito com sucesso!</h1>

      <TextContainer data-test="movie-info">
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{movieTitle}</p>
        <p>{session}</p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>
          <p>Ingressos</p>
        </strong>
        {selectedSeats &&
          selectedSeats.map((seat) => <p key={seat}>Assento {seat}</p>)}
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: {buyerName}</p>
        <p>CPF: {buyerCPF}</p>
      </TextContainer>

      <Link to="/">
        <button data-test="go-home-btn">Voltar para Home</button>
      </Link>
    </PageContainer>
  );
};

// Styled components...

export default SuccessPage;

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
  button {
    margin-top: 50px;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247a6b;
  }
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
