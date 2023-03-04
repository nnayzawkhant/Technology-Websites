import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { axiosAuth } from '../config/axios';
import { API_URLS } from '../config/url';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import {format} from "timeago.js";

const Category = () => {
    const [categories, setCategoris] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("")
    const navigate = useNavigate();
    
    useEffect(() => {
        loadCategories();
    }, [page, query]);

    const loadCategories = async () => {
        let param = `categories?sortBy=_id:desc&page=${page}&limit=3`
        if(query){
            param += `&categoryname=${query}`
        }
        const result = await (await axiosAuth().get(API_URLS + param)).data;
        console.log(result)
        setCategoris(result);
        setPage(result?.page)
    };

    const deleteCategory = async (id) => {
         await (await axiosAuth().delete(API_URLS + `categories/${id}`)).data;
         loadCategories(page)
    }

    const handleClick = () => {
        navigate('/admin/categories/categoriesaddnews')
    }

    const searchInput =  (e) => {
        setPage(1)
        setQuery(e.target.value)
    }

    const handleNext = () => {
      
        setPage(page + 1)
      }
    
      const handlePrev = () => {
        setPage(page - 1)
      }

  return (
    <div className='main'>
        <h2>Categories</h2>
        <div className='posts__header'>
            <div className='search_box'>
                
                <input type='text' placeholder='Search...' value={query} onChange={searchInput}/>
                <SearchIcon className='search_box_icon'/>
            </div>
            <button onClick={handleClick}>Add New</button>
        </div>
      <table>
        <tr>
            <th>Category</th>
            <th>TotalPosts</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        {
            categories?.results?.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.categoryname}</td>
                        <td>{item.numberOfPosts}</td>
                        <td>
                            {format(item.createdAt)}
                        </td>
                        <td>
                            <div className='post__icon'>
                                <Link to={`/admin/categories/categoriesedit/${item.id}`}>
                                    <EditIcon className='edit'/>
                                </Link>
                                <DeleteIcon onClick={() => deleteCategory(item.id)} className='delete'/>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    </table>
        <div className='page__btn'>
            <button className='btn_pag' disabled={1 >= page} onClick={() => handlePrev()}><KeyboardArrowLeftIcon/></button>
            <span className='page__span'>{categories.page}/{categories.totalPages}</span>
            <button className='btn_pag' disabled={categories?.totalPages <= page} onClick={() => handleNext()}><KeyboardArrowRightIcon/></button>
        </div>
    </div>
  )
}

export default Category