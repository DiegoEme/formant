import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import FormGroup, { Robot } from "./components/FormGroup";
import { URL } from "./utils/constants";

function App() {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [newRobot, setNewRobot] = useState<Robot>();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [arms, setArms] = useState("");
  const [picture, setPicture] = useState("");

  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRobot = {
      name,
      age,
      arms,
      picture,
    };

    // setRobot(newRobot);
    addRobot(newRobot);

    setAge("");
    setName("");
    setArms("");
    setPicture("");
  };

  const addRobot = async (robot: Robot) => {
    try {
      const { data } = await axios.post(URL + "/api/robot/add", robot);
      setNewRobot(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fecthData = async () => {
    const { data } = await axios.get(URL + "/api/robot/list");
    setRobots(data);
  };

  useEffect(() => {
    fecthData();
  }, [newRobot]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <h1 className="mb-12">Add a new Robot</h1>
        <FormGroup
          onSubmitHandle={onSubmitHandle}
          setName={setName}
          setArms={setArms}
          setPicture={setPicture}
          setAge={setAge}
          name={name}
          arms={arms}
          picture={picture}
          age={age}
        />
      </div>
      <div>
        {robots.length > 0 ? (
          robots.map((robot, index) => {
            return <Card key={index} robot={robot} />;
          })
        ) : (
          <h3>Loading ...</h3>
        )}
      </div>
    </div>
  );
}

export default App;
