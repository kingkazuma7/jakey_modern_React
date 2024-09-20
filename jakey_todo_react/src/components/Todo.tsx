import React, { useState } from 'react'

export const Todo = () => {
  const [todoInput, setTodoInput] = useState<string>('')// input
  const [inCompleteTodos, setInCompleteTodos] = useState<Array<string>>(["TODOです1", "TODOです2"]); // 未完了TODOアイテム配列
  const [completeTodos, setCompleteTodos] = useState<Array<string>>(["TODOでした1", "TODOでした2"])// 完了TODOアイテム
  
  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setTodoInput(e.target.value);
  }
  const addTodo = () => {
    if (todoInput === "") return;
    setInCompleteTodos([...inCompleteTodos, todoInput]);
    setTodoInput("");
  }
  
  const deleteTodo = (index: number) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  }
  
  const completeTodo = (index: number) => {
    // inCompleteTodosのコピーを作成
    const temporaryTodos = [...inCompleteTodos];
    // 指定されたインデックスのタスクを削除
    const [removedTodo] = temporaryTodos.splice(index, 1); 
    // 削除されたタスクをcompleteTodosに追加
    const updatedCompleteTodos = [...completeTodos, removedTodo];
  
    // 削除されたタスクを元の配列から削除
    setInCompleteTodos(temporaryTodos); 
    // 完了したタスクを新しい配列に追加
    setCompleteTodos(updatedCompleteTodos);
  };

  return (
    <React.Fragment>
      <div className="input-area">
        <input placeholder="TODOを入力" onChange={handleInputChange} />
        <button onClick={addTodo}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className='title'>未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className='todo-item'>{todo}</p>
                  <button onClick={() => completeTodo(index)}>完了</button>
                  <button onClick={() => deleteTodo(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
              <p className='todo-item'>{todo}</p>
              <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Todo