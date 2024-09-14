// 追加をクリックしたとき
// li>div>p+button+buttonを生成する
// 完了をクリックしたとき
// 削除をクリックしたとき
// 戻すをクリックしたとき
// inputの入力を取得する

const inputTodo = document.getElementById("input-todo");
const buttonAdd = document.getElementById("button-add");
const incompleteTodo = document.getElementById("incomplete-todo");

document.addEventListener("DOMContentLoaded", () => {
  const onClickAdd = () => {
    const inputValue = inputTodo.value;
    inputTodo.value = ""; // 初期化

    const li = document.createElement("li");
    const div = document.createElement("div");
          div.className = "list-row";
    const p = document.createElement("p");
          p.innerText = inputValue;
    const buttonComplete = document.createElement("button");
          buttonComplete.innerText = "完了";
    const buttonDelete = document.createElement("button");
          buttonDelete.innerText = "削除";

    div.appendChild(p);
    div.appendChild(buttonComplete);
    div.appendChild(buttonDelete);
    li.appendChild(div);
    incompleteTodo.appendChild(li);
  };

  buttonAdd.addEventListener("click", onClickAdd);
});
