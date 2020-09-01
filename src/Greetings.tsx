import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  onClick: (name: string) => void;
};

function Greetings({ name, mark, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name}!<button onClick={handleClick}>Click me!</button>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
