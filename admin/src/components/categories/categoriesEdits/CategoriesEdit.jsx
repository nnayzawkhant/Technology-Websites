import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../../posts/postsadds/postadds.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { axiosAuth, axiosAuthUpload } from "../../../config/axios";
import { API_URLS } from "../../../config/url";


const CategoriesEdit = () => {
    
  const navigate = useNavigate();
  const [categories, setCategories] = useState({
    categoryname: ""
  })
  const { id } = useParams();

    useEffect(() => {
        updatedCategory(id);
        //console.log("HELLO")
    }, [])

    const updatedCategory = async (id) => {
        const upcategory = await (await axiosAuthUpload().get(API_URLS + `categories/${id}`)).data;
        setCategories(upcategory);
    }
  
    const onSubmit = async (e) => {
        e.preventDefault();
            const resultpost = await axiosAuth().patch(API_URLS + `categories/${id}`, categories)
            console.log(resultpost);
            navigate('/admin/categories/');
    }

    const onInputChange = (e) => {
        setCategories({...categories,[e.target.name]: e.target.value})
    }

    
  return (
    <>
    <div className="main__users">
        <form onSubmit={ e => onSubmit(e) }>
            <div className="form__text">
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="categoryname"
                    value={categories.categoryname}
                    onChange={ e => onInputChange(e) }
                />
            </div>
            </div>
            
            <br/>
            <div className="posts__adds-btn">
                <button  className="dlt__btn" onClick={() => navigate('/admin/categories/')}>Cannel</button>
                <button type="submit" className="update__btn" onClick={onSubmit}>Update</button>
            </div>
        </form>
    </div>
    </>
  );
};

export default CategoriesEdit;