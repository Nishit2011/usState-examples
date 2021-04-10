import "./styles.css";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [obj, setObj] = useState({ firstName: "", lastName: "" });
  const [val, setVal] = useState(" ");
  const [arr, setArr] = useState([]);
  const [arrObj, setArrObj] = useState([{ name: "", age: 99 }]);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setArr([...arr, val]);
    setVal("");
  };

  const removeItems = (item) => {
    const copiedArr = [...arr];
    const updatedArr = copiedArr.filter((el) => el !== item);
    setArr(updatedArr);
  };

  const handleSubmitFn = (e) => {
    e.preventDefault();
    console.log(e.target.getAttribute("age"));
  };

  useEffect(() => {}, [arr]);

  return (
    <div className="App">
      <div>
        <p>
          <i>useState for simple objects</i>
        </p>
      </div>
      <input
        type="text"
        placeholder="Enter First Name"
        value={obj.firstName}
        onChange={(e) => setObj({ ...obj, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Last Name"
        value={obj.lastName}
        onChange={(e) => setObj({ ...obj, lastName: e.target.value })}
      />
      <div>{`${obj.firstName}  ${obj.lastName}`}</div>

      <hr />
      <p>
        <i> useState for simple array</i>
        <br />
        <i> click on list items to remove</i>
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter anything"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          ref={inputRef}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      {arr.map((elem, index) => (
        <div key={index} onClick={() => removeItems(elem)}>
          {elem}
        </div>
      ))}
      <hr />

      {/* <i>useState for array of objects</i>
      <form onSubmit={handleSubmitFn}>
        <div>
          <input type="text" placeholder="Enter your name" name="name" 
          onChange={(e)=>setArrObj()}/>
        </div>
        <div>
          <input type="text" placeholder="Enter your age" name="age" />
        </div>
        <button>Submit</button>
      </form> */}
    </div>
  );
}
