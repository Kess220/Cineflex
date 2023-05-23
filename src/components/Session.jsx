import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Session = () => {
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`,
        {
          headers: {
            Authorization: "jPzNYwM1GsaG0kvIgk5Jd5lv",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieId]);

  return null;
};

export default Session;
