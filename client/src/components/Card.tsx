import "../App.css";
import imgUrl from "../assets/default-img.jpeg";
import { Robot } from "./FormGroup";

type CardPorps = {
  robot?: Robot;
};

const Card = ({ robot }: CardPorps) => {
  return (
    <div className="min-w-[300px] flex flex-row gap-6 shadow-md p-6">
      <div className="flex justify-center">
        <img
          className="object-cover rounded-[50%] w-[80px] h-[80px]"
          src={robot?.picture === "" ? imgUrl : robot?.picture}
          alt="robot image"
        />
      </div>
      <div className="text-left flex flex-col justify-center ">
        <p>Name: {robot?.name}</p>
        <p>Age: {robot?.age}</p>
        <p>Number of arms: {robot?.arms}</p>
      </div>
    </div>
  );
};

export default Card;

//https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
