import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DymmyProps {
  text: string;
  other?: boolean;
}

function Dummy({ text, other = false }: DymmyProps) {
  return <H1>{text}</H1>;
}

const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};

function App() {
  return (
    <Container>
      <Dummy other text="hello" />
      <form>
        <button onClick={onClick}>Click me</button>
      </form>
    </Container>
  );
}

export default App;
