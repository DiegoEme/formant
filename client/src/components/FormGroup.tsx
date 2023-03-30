export type Robot = {
  id?: string;
  name?: string;
  age?: string;
  arms?: string;
  picture?: string;
};

type FormGroupProps = {
  onSubmitHandle: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  age: string;
  arms: string;
  picture: string;
  setName: (value: string) => void;
  setArms: (value: string) => void;
  setPicture: (value: string) => void;
  setAge: (value: string) => void;
};

const FormGroup = ({
  onSubmitHandle,
  name,
  age,
  arms,
  picture,
  setName,
  setArms,
  setAge,
  setPicture,
}: FormGroupProps) => {
  return (
    <form className="flex flex-col  gap-4" onSubmit={onSubmitHandle}>
      <input
        required
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        className="border p-2"
        type="text"
        placeholder={"Name"}
      />
      <input
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAge(e.target.value)
        }
        value={age}
        className="border p-2"
        type="number"
        placeholder={"Age"}
      />
      <input
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setArms(e.target.value)
        }
        value={arms}
        className="border p-2"
        type="number"
        placeholder={"Number of arms"}
      />
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPicture(e.target.value)
        }
        value={picture}
        className="border p-2"
        type="text"
        placeholder={"Picture"}
      />
      <input
        className="w-full cursor-pointer p-2 bg-slate-800 text-white font-bold"
        type="submit"
        value="ADD"
      />
    </form>
  );
};

export default FormGroup;
