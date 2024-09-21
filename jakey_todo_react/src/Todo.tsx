import React, { useState } from 'react'
import { InputTodo } from "./components/inputTodo";
import { IncompleteTasks } from "./components/incompleteTasks";
import { CompletedTasks } from './components/completedTasks';

export const Todo = () => {
  const [todoText, setTodoText] = useState<string>('') // input
  const [incompleteTasks, setIncompleteTasks] = useState<Array<string>>([]); // 未完了TODO
  const [completedTasks, setCompletedTasks] = useState<Array<string>>([]) // 完了TODOアイテム

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setTodoText(e.target.value);
  }
  const addTask = () => {
    if (todoText === "") return;
    setIncompleteTasks([...incompleteTasks, todoText]);
    setTodoText("");
  }

  const deleteTask = (index: number) => {
    const newIncompleteTasks = [...incompleteTasks];
    newIncompleteTasks.splice(index, 1);
    setIncompleteTasks(newIncompleteTasks);
  }

  const completeTask = (index: number) => {
    // incompleteTasksのコピーを作成
    const temporaryIncompleteTasks = [...incompleteTasks];
    // 指定されたインデックスのタスクを削除
    const [removedTask] = temporaryIncompleteTasks.splice(index, 1);
    // 削除されたタスクをcompletedTasksに追加
    const updatedCompletedTasks = [...completedTasks, removedTask];

    // 削除されたタスクを元の配列から削除
    setIncompleteTasks(temporaryIncompleteTasks);
    // 完了したタスクを新しい配列に追加
    setCompletedTasks(updatedCompletedTasks);
  };

  const revertTask = (index: number) => {
    // click 完了配列取得 index番目削除 未完了配列取得 index番目追加
    const temporaryIncompleteTasks = [...incompleteTasks]; // 未完了
    const temporaryCompletedTasks = [...completedTasks]; // 未完了
    const [removedTask] = temporaryCompletedTasks.splice(index, 1);
    const newIncompleteTasks = [...temporaryIncompleteTasks, removedTask];
    setCompletedTasks(temporaryCompletedTasks);
    setIncompleteTasks(newIncompleteTasks);
  }
  return (
    <React.Fragment>
      <InputTodo
        todoText={todoText}
        handleInputChange={handleInputChange}
        addTask={addTask}
        placeholder={"TODOを入力"}
      />
      <IncompleteTasks
        todos={incompleteTasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
      <CompletedTasks
        todos={completedTasks}
        revertTask={revertTask}
      />
    </React.Fragment>
  )
}

export default Todo