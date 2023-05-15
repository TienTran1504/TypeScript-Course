import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>(""); // <string> to define string for useState string | number: union
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos,{id:Date.now(), todo:todo, isDone:false}])
      setTodo("");
    }
  };
  console.log(todos);
  
  // console.log(todo);


  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo ={setTodo} handleAdd ={handleAdd} />
      {/* <TodoList/> */}
      {todos.map(t => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
