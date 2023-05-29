import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SeatItem from "../../components/SeatItem";

const SeatsPage = () => {
  const navigate = useNavigate();
  const { showtimeId } = useParams();
  const [seats, setSeats] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [buyerName, setBuyerName] = useState("");
  const [buyerCPF, setBuyerCPF] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtimeId}/seats`,
          {
            headers: {
              Authorization: "jPzNYwM1GsaG0kvIgk5Jd5lv",
            },
          }
        );
        setSeats(response.data);
        setMovieTitle(response.data?.movie?.title || "");

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeats();
  }, [showtimeId]);

  const { name, day, movie, seats: seatsData } = seats || {};

  const handleSeatClick = (seatId) => {
    const selectedSeat = seatsData.find((seat) => seat.id === seatId);

    if (selectedSeat) {
      if (!selectedSeat.isAvailable) {
        alert("Esse assento não está disponível");
        return;
      }

      if (selectedSeats.includes(seatId)) {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
      } else {
        setSelectedSeats([...selectedSeats, seatId]);
      }
    }
  };

  const handleReservation = async () => {
    if (selectedSeats.length === 0) {
      alert("Selecione ao menos 1 assento para poder prosseguir.");
      return;
    }
    if (buyerName.trim() === "" || buyerCPF.trim() === "") {
      alert("Preencha todos os dados para finalizar sua compra!");
      return;
    }

    try {
      const response = await axios.post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        {
          ids: selectedSeats,
          name: buyerName,
          cpf: buyerCPF,
        },
        {
          headers: {
            Authorization: "jPzNYwM1GsaG0kvIgk5Jd5lv",
          },
        }
      );
      console.log(response.data);

      const updatedResponse = await axios.get(
        `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtimeId}/seats`,
        {
          headers: {
            Authorization: "jPzNYwM1GsaG0kvIgk5Jd5lv",
          },
        }
      );
      setSeats(updatedResponse.data);

      // Get the selected seat objects with names
      const selectedSeatObjects = seatsData.filter((seat) =>
        selectedSeats.includes(seat.id)
      );

      // Get the seat names from the selected seat objects
      const selectedSeatNames = selectedSeatObjects.map((seat) => seat.name);

      // Redirect to SuccessPage
      navigate("/sucesso", {
        state: {
          movieTitle: movieTitle,
          session: `${day?.date} - ${name}`,
          selectedSeats: selectedSeatNames,
          buyerName,
          buyerCPF,
          seatsData: seatsData, // Pass the 'seatsData' prop
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {seatsData &&
          seatsData.map((seat) => (
            <SeatItem
              key={seat.id}
              seatId={seat.name}
              isAvailable={seat.isAvailable}
              isSelected={selectedSeats.includes(seat.id)}
              onClick={() => handleSeatClick(seat.id)}
            />
          ))}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle isSelected />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle isAvailable />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle />
          Indisponível
        </CaptionItem>
      </CaptionContainer>
      <FormContainer>
        Nome do Comprador:
        <input
          data-test="client-name"
          placeholder="Digite seu nome..."
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
        />
        CPF do Comprador:
        <input
          data-test="client-cpf"
          placeholder="Digite seu CPF..."
          value={buyerCPF}
          onChange={(e) => setBuyerCPF(e.target.value)}
        />
        <button data-test="book-seat-btn" onClick={handleReservation}>
          Reservar Assento(s)
        </button>
      </FormContainer>
      <FooterContainer data-test="footer">
        <div>
          <img src={movie?.posterURL} alt="poster" />
        </div>
        <div>
          <p>{movie?.title}</p>
          <p>{`${day?.weekday} - ${name}`}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
  }
`;
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionCircle = styled.div`
  background-color: ${(props) =>
    props.isAvailable ? "#C3CFD9" : props.isSelected ? "#1AAE9E" : "#FBE192"};
  border: 1px solid
    ${(props) =>
      props.isAvailable ? "#7B8B9A" : props.isSelected ? "#1AAE9E" : "#F7C84D"};
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: #7b8b9a;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;

export default SeatsPage;
