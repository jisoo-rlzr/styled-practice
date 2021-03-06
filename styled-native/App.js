import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 100px
`

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
  text-align: center;
`

export default function App() {
  return (
    <Container>
      <Title>React Native with Styled Components</Title>
    </Container>
  );
}