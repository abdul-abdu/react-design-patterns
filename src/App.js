import "./App.css";
import { SplitScreen } from "./SplitScreen";

function LeftHandComponent() {
  return <h1 style={{backgroundColor: "thistle"}}>LEFT</h1>;
}

function RightHandComponent() {
  return <h1 style={{backgroundColor: "tomato"}}>Right</h1>;
}

function App() {
  return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />;
}

export default App;
