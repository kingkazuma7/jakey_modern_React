// 追加をクリックしたとき
// li>div>p+button+buttonを生成する
// 完了をクリックしたとき
// 削除をクリックしたとき
// 戻すをクリックしたとき
// inputの入力を取得する

const inputTodo = document.getElementById("input-todo");
const buttonAdd = document.getElementById("button-add");
const incompleteTodo = document.getElementById("incomplete-todo");
const completeTodo = document.getElementById("complete-todo");

document.addEventListener("DOMContentLoaded", () => {
  const createIncompleteTodo = (todo) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
          div.className = "list-row";
    const p = document.createElement("p");
          p.innerText = todo;
    const buttonComplete = document.createElement("button");
          buttonComplete.innerText = "完了";
    const buttonDelete = document.createElement("button");
          buttonDelete.innerText = "削除";
    const buttonBack = document.createElement("button");
          buttonBack.innerText = "戻す";

    div.appendChild(p);
    div.appendChild(buttonComplete);
    div.appendChild(buttonDelete);
    li.appendChild(div);
    incompleteTodo.appendChild(li);

    // 削除機能
    buttonDelete.addEventListener("click", (e) => {
      const deleteTarget = e.target.closest("li");
      deleteTarget.remove();
    });

    // 完了機能
    buttonComplete.addEventListener("click", (e) => {
        const moveTarget = e.target.closest("li");
        const moveTargetDel = buttonComplete.nextElementSibling;
              moveTargetDel.remove();
              buttonComplete.remove();
              div.appendChild(buttonBack);
              completeTodo.appendChild(moveTarget);
    });

    // 戻す機能
    buttonBack.addEventListener("click", (e) => {
      const backTarget = e.target.closest("li");
      buttonBack.remove();

      div.appendChild(buttonComplete);
      div.appendChild(buttonDelete);
      incompleteTodo.appendChild(backTarget);
    });
  };

  const onClickAdd = () => {
    const inputValue = inputTodo.value;
          inputTodo.value = ""; // 初期化

    createIncompleteTodo(inputValue);
  };
  
  buttonAdd.addEventListener("click", onClickAdd);

});
