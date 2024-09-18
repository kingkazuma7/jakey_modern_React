import React, { useState } from 'react'

export const Todo = () => {
  const [inCompleteTodos, setInCompleteTodos] = useState(["TODOです1", "TODOです2"]); // 未完了TODOアイテム配列
  const [completeTodos, setCompleteTodos] = useState(["TODOでした1", "TODOでした2"])// 完了TODOアイテム
  
  return (
    <React.Fragment>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className='title'>未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className='todo-item'>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
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