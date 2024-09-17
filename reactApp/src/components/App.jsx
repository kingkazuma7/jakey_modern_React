import { useEffect, useState } from "react";
import { ColorfulMessage } from "./ColorfulMessage";

export const App = () => {
  console.log(" -- APP");
  
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true)
  const onClickCountUp = () => {
    setNum(num+1);
  }
  const onClickShowFace = () => {
    setIsShowFace(!isShowFace);
  }
  
  useEffect(() => {
    // numが更新されたときのみ処理が実行される
    console.log(" ---- useEffect");
    if (num % 3 === 0 && num !== 0) {
      isShowFace || setIsShowFace(true);
    } else {
      isShowFace && setIsShowFace(false);
    }
  }, [num]);
  
  

  return (
    <>
      <h1>こんにちは!</h1>
      <ColorfulMessage color="red" message="お元気ですか？"  />
      <ColorfulMessage color="green">お元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button><br />
      <button onClick={onClickShowFace}>on/off</button>
      <p>{num}</p>
      {isShowFace && <p>(·∀·)[笑]</p>}
    </>
  )
}