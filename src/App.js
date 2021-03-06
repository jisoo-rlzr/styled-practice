import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  } 
`

// const awesomeCard = css`
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   background-color: white;
//   border-radius: 10px;
//   padding: 20px;
// `

const Card = styled.div`
  background-color: #8c7ae6;
`

const Container = styled.div`
  height:100vh;
  width:100%;
  background-color: #fed330;
  ${Card}:first-child {
    background-color: #40739e;
  }
`

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor}
`

// const Input = styled.input.attrs({
//   required: true
// })`
//   border: none;
//   ${awesomeCard}
// `;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle/>
        <Form/>
      </Container>
    </ThemeProvider>
  );

  // return (<Container>
  //   <GlobalStyle/>
  //   <Input placeholder="hello"></Input>
  // </Container>);

  // return (
  //   <Container>
  //     <GlobalStyle/>
  //     <Button>Hello</Button>
  //     <Button danger rotationTime={5}>Bye</Button>
  //     <Anchor href="https://google.com">Go to google</Anchor>
  //   </Container>
    
  // );
}

const Form = () => (<Card>
  <Button>Hello</Button>
</Card>)

// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600;
//   appearance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
//   background-color: ${props => props.danger ? "#fc5c65" : "#26de81" };
//   ${props => {
//     if (props.danger) {
//       return css`animation: ${rotation} ${props.rotationTime}s linear infinite;`
//     }
//   }}
// `

// const Anchor = styled(Button.withComponent("a"))`
//   text-decoration:none;
// `

// const rotation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `

export default App;
