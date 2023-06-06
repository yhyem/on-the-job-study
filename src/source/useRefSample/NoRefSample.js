import { useState } from "react";

const NoRefSample = () => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  console.log("rendered");

  return (
    <div className="box">
      <input type="text" onChange={handleChange} />
      {username}
    </div>
  );
};

export default NoRefSample;
