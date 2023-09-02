import React, { 
    memo, // ②
    useState, 
    useCallback, 
    useEffect 
} from "react";

// ① toggleが切り替わるたびにレンダリングが走り、関係ないChildコンポーネントも再レンダリングされる。
// ②計算量の高いコンポーネントと仮定して useCallbackを使用し、再レンダリングを回避する

const Callback = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

//   const multiplication = () => {
//     return count * count;
//   };
  // ②
  const multiplication = useCallback(() => {
    return count * count;
  }, [count]);

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
// ②memoラップ
const Child = memo(({ multiplication }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Child');
    setValue(multiplication);
  })

  return <p>{value}</p>
})

export default Callback;