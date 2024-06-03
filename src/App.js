import styled from "styled-components";
import { ObjectDetector } from "./components/objectDetection";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1c2127;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export default function App() {
  return <AppContainer>
    <ObjectDetector />
  </AppContainer>;
}
