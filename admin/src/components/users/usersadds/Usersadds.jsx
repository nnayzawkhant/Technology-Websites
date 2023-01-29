import React from 'react';
import { useNavigate } from 'react-router-dom';
import './usersadds.css';

const Usersadds = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/users/usersviews');
    }
  return (
    <div className='main__users'>
        <form>
            <div className="form__text">
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" />
            </div>

            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter Your Password" />
            </div>
            </div>

            <div className="form__text">
            <div>
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
            </div>
            <div>
                <label>Email</label>
                <input type="file" placeholder="example@gmail.com" />
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

export default Usersadds;