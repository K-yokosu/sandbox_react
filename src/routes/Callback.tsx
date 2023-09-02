import React, { useState, useCallback, useEffect } from "react";

// ① toggleが切り替わるたびにレンダリングが走り、関係ないChildコンポーネントも再レンダリングされる。

const Callback = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const multiplication = () => {
    return count * count;
  };

  return (
    <div className="App">
      {count}
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => setToggle(!toggle)}> toggle </button>
      <Child multiplication={multiplication} />
    </div>
  );
}

const Child = ({ multiplication }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Child');
    setValue(multiplication);
  })

  return <p>{value}</p>
}

export default Callback;