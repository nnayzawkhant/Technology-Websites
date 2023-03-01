import React, { useState } from 'react';
import './categoryAddNew.css';
import { useNavigate } from 'react-router-dom';
import { axiosAuthUpload } from '../../../config/axios';
import { API_URLS } from '../../../config/url';

const CategoriesAddnews = () => {
    const navigate = useNavigate();
    const [cats, setCats] = useState('');


  const onSubmit = async (e) => {
      e.preventDefault();
      try {
          const resultcats = await (await axiosAuthUpload().post(API_URLS + 'categories', {categoryname: cats})).data
          console.log(resultcats)
          navigate('/admin/categories/');
      } catch (error) {
          console.log(error);
      } 
  }

  return (
    <div className='main__users'>
        <form onSubmit={ e => onSubmit(e)}>
            <div className="form__text">
            <div>
                <label>Category</label>
                <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    name='cats'
                    value={cats}
                    onChange={ e => setCats(e.target.value) }
                    />
            </div>
            </div>
            <div className="posts__adds-btn">
                <button className="dlt__btn" onClick={() => navigate('/admin/categories/')}>Cannel</button>
                <button className="update__btn" onClick={onSubmit}>Submit</button>
            </div>

            
        </form>
    </div>
  )
}

export default CategoriesAddnews;