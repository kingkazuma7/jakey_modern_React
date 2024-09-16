import { ColorfulMessage } from "./ColorfulMessage";

export const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1>こんにちは!</h1>
      <ColorfulMessage color="red" message="お元気ですか？"  />
      <ColorfulMessage color="green">お元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}