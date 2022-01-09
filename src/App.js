import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Btn = styled.button`
  color: red;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji} :hover {
    font-size: 98px;
  }
`;

const Circle = styled(Box)`
  background-color: teal;
`;

const Input = styled.input.attrs({ required: true, maxLength: "10" })`
  background-color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😃</Emoji>
      </Box>
      <Btn>Log In</Btn>
      <Btn as="a">Go home</Btn>
      <Input />
      <Input />
      <Input />
    </Wrapper>
  );
}
export default App;
