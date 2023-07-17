import styled from "styled-components";
import CalendarContainor from "../containor/CalendarContainor";

const Home = () => {
  return (
    <Div>
      <CalendarContainor></CalendarContainor>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 880px;
  margin: 10px auto;
  display: flex;
`;
