import "../App.css";

const Card = () => {
  return (
    <div className="min-w-[300px] flex flex-row gap-6 shadow-md p-6">
      <div className="flex justify-center">
        <img
          className="object-cover rounded-[50%] w-[80px] h-[80px]"
          src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="robot image"
        />
      </div>
      <div className="text-left flex flex-col justify-center ">
        <p>Name: Robot 1</p>
        <p>Age: 2</p>
        <p>Number of arms: 2</p>
      </div>
    </div>
  );
};

export default Card;

//https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
