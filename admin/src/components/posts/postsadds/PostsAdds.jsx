import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const PostsAdds = () => {
  const editor = useRef(null);
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/posts/postsadds');
    }
    
  return (
    <>
    <div className="main__users">
        <form>
            <div className="form__text">
            <div>
                <label>Name</label>
                <input type="text" placeholder="Name" />
            </div>

            <div>
                <label>Date</label>
                <input type="date" placeholder="Enter Your Password" />
            </div>
            </div>

            <div className="form__text">
            <div>
                <label>Category Name</label>
                <input type="text" placeholder="categories name" />
            </div>
            <div>
                <label>Image</label>
                <input type="file" placeholder="image" />
            </div>

            
            
            </div>
            <div>
                <p>Description</p>
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

export default PostsAdds;