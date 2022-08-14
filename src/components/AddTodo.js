import {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../redux/taskSlice"

const AddTodo = ()=>{
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (event)=> {
        event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}
        dispatch(
            addTask({
                task: value
            })
        );
        setValue("");
    };
    return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				Add Task
			</button>
		</div>
	);
};

export default AddTodo;