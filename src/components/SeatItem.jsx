/* eslint-disable react/prop-types */
import styled from "styled-components";

const SeatItem = ({ isSelected, isAvailable, seatId, onClick }) => {
  return (
    <Seat
      data-test="seat"
      isSelected={isSelected}
      isAvailable={isAvailable}
      onClick={onClick}
    >
      {seatId}
    </Seat>
  );
};

const Seat = styled.div`
  background-color: ${(props) =>
    props.isSelected ? "#1AAE9E" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
  border: 1px solid
    ${(props) =>
      props.isSelected ? "#0E7D71" : props.isAvailable ? "#7B8B99" : "#F7C52B"};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
  cursor: ${(props) => (props.isAvailable ? "pointer" : "default")};
`;

export default SeatItem;
