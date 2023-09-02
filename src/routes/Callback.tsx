import React, { 
    memo, // ②
    useState, 
    useCallback, 
    useEffect 
} from "react";

// ① toggleが切り替わるたびにレンダリングが走り、関係ないChildコンポーネントも再レンダリングされる。
// ② 再レンダリングを回避する
// ③ memo&useCallbackで再レンダリングをスキップできるが、
//    useCallbackは毎回関数を作成しているし、依存配列に変更がないか確認している。
//    これらを計測するのは難しいけど、最適化自体にも時間的コストがかかっていることを念頭におく必要がある。

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