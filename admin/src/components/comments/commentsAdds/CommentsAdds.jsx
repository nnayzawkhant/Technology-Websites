import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const CommentsAdds = () => {
  const editor = useRef(null);
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admin/comments/commentsadds');
    }
    
  return (
    <>
    <div className="main__users">
        <form>
            <div className="form__text">
            <div>
                <label>Author Name</label>
                <input type="text" placeholder="Author Name" />
            </div>

            <div>
                <label>Date</label>
                <input type="date" placeholder="Enter Your Password" />
            </div>
            </div>

            <div className="form__text">
                <div>
                    <label>Status</label>
                    <p>Enable</p>
                </div>
            </div>
            <div>
                <p>Comments Box</p>
                <JoditEditor
                    ref={editor}
                    config={config}
                    tabIndex={1}
                />
            </div>
            
            <br/>
            <div className="profile__img-btns">
                <button className="dlt__btn" onClick={handleClick}>Cannel</button>
                <button className="update__btn">Update</button>
            </div>

            
        </form>
    </div>
    
    </>
  );
};

export default CommentsAdds;