import { useRef, useState } from "react";

const RefSample = () => {
  const inputRef = useRef(0);
  const [user, setUser] = useState([]);

  const addUser = () => {
    setUser([...user, { name: inputRef.current.value }]);
  };

  console.log("rendered");

  return (
    <div className="box">
      <input type="text" ref={inputRef} />
      <button onClick={addUser}>add user</button>
      <div>
        {user.map((user, idx) => {
          return <h4 key={idx}>{user.name}</h4>;
        })}
      </div>
    </div>
  );
};

export default RefSample;
