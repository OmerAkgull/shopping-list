import { GlobalStyle } from "./globalStyles";
import MyInputGroup from "./components/inputGroup";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 72px;
  color: white;
  text-align: center;
  margin-bottom: 50px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>Shopping List</Header>
      <MyInputGroup />
    </>
  );
}

export default App;
