import Storage from "./storage";
import {useState} from "react";


function Input() {
  const [data, setData] = useState('');

  const handleChange = (e) => {
    const newData = e.target.value;
    setData(newData);
  }

  Storage(data);
  return (
    <div className="input">
      <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default Input;