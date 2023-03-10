import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { axiosAuth, axiosAuthUpload } from "../../../config/axios";
import * as Yup from "yup";
import { API_URLS } from "../../../config/url";
import img from '../../../assets/img/spinner.gif';


const Usersedits = () => {
    
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [users, setUsers] = useState({
    name: "",
    password:"",
    email: "",
    profilePic: '',
  });
  const navigate = useNavigate();


    useEffect(() => {
        updatedUser(id);
        //console.log("HELLO")
    }, [])

    const updatedUser = async (id) => {
        const upuser = await (await axiosAuthUpload().get(API_URLS + `users/${id}`)).data;
        setUsers({name: upuser.name, email: upuser.email, profilePic: upuser.profilePic, password: ''});
    }
  
    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("file", users.profilePic);
        data.append('upload_preset', 'uploads');
        setLoading(true)

        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/dd16bmesr/image/upload",
                data
              );
              console.log(uploadRes.data.url)
        
              const  url  = uploadRes.data.url;
              console.log(url)
              const newUsers = {
                name: users.name,
                password: users.password,
                email: users.email,
                profilePic: url,
              }
              const resultuser = await axiosAuthUpload().patch(API_URLS + `users/${id}`, newUsers)
                console.log(resultuser);
                navigate('/admin/users/');
                setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(error.response.data.message)
          setError(error.response.data.error.message)
          
        }
            
    }

    const onInputChange = (e) => {
        setUsers({...users,[e.target.name]: e.target.value})
    }

      const onLogoChange = (e) => {
        setUsers({...users, profilePic: e.target.files[0]})
      }
    
  return (
    <>
    <div className="main__users">
    {loading ? 
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
                    value={users.password}
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
                              <input type="file" className='hidden' onChange={onLogoChange}/>
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
            <div className="profile__img-btns">
                <button  className="dlt__btn" onClick={() => navigate('/admin/users/')}>Cannel</button>
                <button type="submit" className="update__btn" onClick={onSubmit}>Send</button>
            </div>

            
        </form>
      )
    }
    </div>
    </>
  );
};

export default Usersedits;