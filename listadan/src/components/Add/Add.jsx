import './Add.css';
import { createRef } from "react";

export default function Add({ AddList }) {
    const titleRef = createRef();
    const contentRef = createRef();

    return (
        <div className="inputField">
            <input className="inputTitle" type="text" placeholder="Add Title" name="title" ref={titleRef} />
            <textarea className="inputContent" placeholder="Write Content" name="content" ref={contentRef} />
            <button className="inputButton" onClick={(e) => {
                const title = String(titleRef.current.value);
                const content = String(contentRef.current.value);

                if (title && content) {
                    e.preventDefault();
                    AddList(title, content);
                    console.log(title, content);

                    contentRef.current.value = "";
                    titleRef.current.value = "";
                }
            }}>Add</button>
        </div>
    );
}
