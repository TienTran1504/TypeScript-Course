import React, { useRef } from 'react'
import "./style.css"
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd} : Props ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur(); // ?: it's not sure going to be optional or having any value inside

        }} className='input'>
            <input
              ref={inputRef}
              type="input"
              placeholder="Enter a task"
              className="input__box"
              value={todo}
              onChange={
                  (e) => setTodo(e.target.value)
              }
          />
          <button className="input_submit" type="submit">
              Go
          </button>
    </form>
    )
}

export default InputField