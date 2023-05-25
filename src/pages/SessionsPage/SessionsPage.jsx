import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const SessionsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`,
          {
            headers: {
              Authorization: "jPzNYwM1GsaG0kvIgk5Jd5lv",
            },
          }
        );
        setMovie(response.data);
        console.log(response.data); // Exibe os dados no console
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  const handleShowtimeClick = async (showtime) => {
    try {
      const seatsResponse = await axios.get(
        `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtime.id}/seats`,
        {
          headers: {
            Authorization: "jPzNYwM1GsaG0kvIgk5Jd5lv",
          },
        }
      );
      console.log(seatsResponse.data); // Exibe os dados dos assentos no console
      navigate(`/assentos/${showtime.id}`); // Redireciona para a página de assentos com o ID da sessão
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer>
      {movie && (
        <>
          <h2>Selecione o horário</h2>
          <div>
            {movie.days.map((day) => (
              <SessionContainer data-test="movie-day" key={day.id}>
                <p>
                  {day.weekday} - {day.date}
                </p>
                <ButtonsContainer>
                  {day.showtimes.map((showtime) => (
                    <button
                      data-test="showtime"
                      key={showtime.id}
                      onClick={() => handleShowtimeClick(showtime)}
                    >
                      {showtime.name}
                    </button>
                  ))}
                </ButtonsContainer>
              </SessionContainer>
            ))}
          </div>
          <FooterContainer data-test="footer">
            <div>
              <img src={movie.posterURL} alt="poster" />
            </div>
            <div>
              <p>{movie.title}</p>
            </div>
          </FooterContainer>
        </>
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  div {
    margin-top: 20px;
  }
`;
const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
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

export default SessionsPage;
