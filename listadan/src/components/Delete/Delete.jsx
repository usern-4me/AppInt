import { IoCloseSharp } from "react-icons/io5";
import './Delete.css';

export default function Delete({ DeleteList, index }) {
    return (
        <button className='Delete' onClick={() => DeleteList(index)}>
            <IoCloseSharp className="Delete-text" />
        </button>
    );
}
