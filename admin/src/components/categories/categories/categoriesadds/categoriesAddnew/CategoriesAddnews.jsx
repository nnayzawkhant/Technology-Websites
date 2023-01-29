import React from 'react';
import './categoryAddNew.css'
import { useNavigate } from 'react-router-dom';

const CategoriesAddnews = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/categories/categoriesviews');
    }
  return (
    <div className='main__users'>
        <form>
            <div className="form__text">
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" />
            </div>
            </div>

            <div className="form__text">
            <div>
                <label>Updated Art:</label>
                <p>123-456-7-8888-54</p>
            </div>
            <div>
                <label>Created Art:</label>
                <p>124-5678-99077</p>
            </div>
            
            </div>
            <div className="profile__img-btns">
                <button className="dlt__btn" onClick={handleClick}>Cannel</button>
                <button className="update__btn">Update</button>
            </div>

            
        </form>
    </div>
  )
}

export default CategoriesAddnews;