
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, uploadImage } from "./registerationSlice";
import img from '../../../assets/img/spinner.gif';
import { useNavigate } from "react-router-dom";
import './usersadds.css'

const Usersadds = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.registeration);
  const { error } = useSelector((state) => state.registeration);
  const [users, setUsers] = useState({
          name: "",
          email: "",
          password:"",
          profilePic: '',
        });

  const handleFileInput = (e) => {
    setUsers({...users, profilePic : e.target.files[0]});
  };

  const handleUploadClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", users.profilePic);
    formData.append('upload_preset', 'uploads'); 
    const url = await dispatch(uploadImage(formData));
    
    console.log(url.payload);

    const pfurl = url.payload
    
    const newposts =  {
      name: users.name,
      password: users.password,
      email: users.email,
      profilePic: pfurl

    }

    dispatch(registerUser(newposts))
    .unwrap()
      .then(() => {
        navigate("/admin/users/");
        // window.location.reload();
      })

    
  };

  const onInputChange = (e) => {
    setUsers({...users,[e.target.name]: e.target.value})
  }

  return (
    <div className="main__users">
      {isLoading ? 
      (
          <div className="img__use"><img src={img} className="user__img"/></div>) : 
      (
                  
        <form>
            <div className="form__text">
            <div>
                <label>Name</label>
                <input 
                    type="text"
                    name='name'
                    placeholder="Enter Your Name"
                    value={users.name} 
                    onChange={(e) =>onInputChange(e)}
                    
                />
            </div>


            <div>
                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    placeholder="Enter Your Password"

                    onChange={(e) =>onInputChange(e)}
                />
            </div>
            </div>
            

            <div className="form__text">
            <div>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    name='email'
                    value={users.email}
                    onChange={(e) =>onInputChange(e)}
                />
            </div>

            <div>
                <button type="button" className="postBtn">
                      <label>{users.profilePic ? <img className='photoImg' src={users.profilePic} alt=""/> : <span className='span'>Add Your Photo</span>}
                              <input name='profilePic' type="file" className='hidden' onChange={handleFileInput}/>
                      </label>
                </button>
            </div>
            
            </div>
            {error && (
              <div className="form-group">
                <div className="alert-messager" role="alert">
                  {error}
                </div>
              </div>
            )}
            <div className="posts__adds-btn">
                <button  className="dlt__btn" onClick={() => navigate('/admin/users/')}>Cannel</button>
                <button className="update__btn" type="submit" onClick={handleUploadClick}>
                  Submit
                </button>
            </div>
        </form>
      )}
    </div>
                    
  );
};

export default Usersadds;



