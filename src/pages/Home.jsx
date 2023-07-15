import styled from "styled-components";
import List from "../components/List";
import Calendar from "../components/Calendar";

const Home = () => {
  return (
    <Div>
      <Calendar></Calendar>
      <List></List>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
`;
