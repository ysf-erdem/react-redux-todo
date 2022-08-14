import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

const TodoItem = ({id, title})=>{
	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({id: id})
		)
	}

return (
    <li>
        <div>
            {title}
        </div>
        <div>
				<button onClick={()=>{removeTask();}}>Delete</button>
		</div>
    </li>
);
};

export default TodoItem;