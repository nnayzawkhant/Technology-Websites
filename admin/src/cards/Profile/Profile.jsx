import React from 'react'
import './profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/category')
  }
  return (
    <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className="profile__desc">
            Update your photo and personal details here
          </p>

          <div className="form__label">
              <button className='logo'>

                  
                  <label>
                    +Add Photo
                      {/* <img className='logoImg' src="" alt=""/>  */}
                      <input type="file" className='hidden'/>
                  </label>

              </button>

              <div className="profile__img-btns">
                <button className="dlt__btn" onClick={() => handleClick}>Cannel</button>
                <button className="update__btn">Update</button>
              </div>
          </div>


          <form>
            <div className="form__group">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>

              <div>
                <label>Password</label>
                <input type="password" placeholder="Enter Your Password" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>
            </div>

            
          </form>
        </div>
  )
}

export default Profile