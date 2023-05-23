import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ImageComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v8/cineflex/movies", {
        headers: {
          Authorization: "jPzNYwM1GsaG0kvIgk5Jd5lv",
        },
      })
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {images.map((image) => (
        <MovieContainer key={image.id}>
          <img src={image.posterURL} alt={image.title} />
        </MovieContainer>
      ))}
    </>
  );
};

const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  img {
    width: 130px;
    height: 190px;
  }
`;
export default ImageComponent;
