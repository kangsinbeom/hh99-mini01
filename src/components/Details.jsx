import styled from "styled-components";
import Detail from "../assets/images/detail.png";
const Details = ({ info }) => {
  const { eventName, start, end, date, circleColor } = info[0];

  return <DetailWarpper img={Detail}></DetailWarpper>;
};

export default Details;

const DetailWarpper = styled.div`
  max-width: 800px;
  height: 800px;
  display: flex;
  margin: auto;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  top: 50%;
  left: 50%;
`;
