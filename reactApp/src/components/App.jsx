import { useState } from "react";
import { ColorfulMessage } from "./ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num+1);
  }

  return (
    <>
      <h1>こんにちは!</h1>
      <ColorfulMessage color="red" message="お元気ですか？"  />
      <ColorfulMessage color="green">お元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  )
}