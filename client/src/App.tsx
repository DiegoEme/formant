import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Number of Arms" />
        <Input type="text" placeholder="Age" />
        <Input type="text" placeholder="Picture" />
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
