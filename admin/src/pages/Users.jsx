import React, { useEffect } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import axios from 'axios';
import { axiosAuth } from '../config/axios';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import { API_URLS } from '../config/url';
import {format} from "timeago.js";




const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, [page, query]);

    const loadUsers = async () => {
        let param = `users?sortBy=_id:desc&page=${page}&limit=4`
        if(query){
            param += `&name=${query}`
        }
        const result = await (await axiosAuth().get(API_URLS + param)).data;
        setPage(result?.page);
        setUsers(result);
    };

    const deleteUser = async (id) => {
         await (await axiosAuth().delete(API_URLS + `users/${id}`)).data;
         loadUsers(page)
    }

    const handleClick = () => {
        navigate('/admin/users/usersadds')
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
        <h2>Users</h2>
        <div className='posts__header'>
            <div className='search_box'>
                
                <input type='text' placeholder='Search...' value={query} onChange={searchInput}/>
                <SearchIcon className='search_box_icon'/>
            </div>
            <button onClick={handleClick}>Add users</button>
        </div>
      <table>
        <tr>
            <th>UserName</th>
            <th>ProfilePic</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        {
            users?.results?.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td><img src={item.profilePic}/></td>
                        <td>
                            {item.email}
                        </td>
                        <td>
                            {format(item.createdAt)}
                        </td>
                        <td>
                            <div className='post__icon'>
                                <Link to={`/admin/users/usersedit/${item.id}`}>
                                    <EditIcon className='edit'/>
                                </Link>
                                <DeleteIcon onClick={() => deleteUser(item.id)} className='delete'/>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    </table>
        <div className='page__btn'>
            <button className='btn_pag' disabled={1 >= page} onClick={() => handlePrev()}><KeyboardArrowLeftIcon/></button>
            <span className='page__span'>{users.page}/{users.totalPages}</span>
            <button className='btn_pag' disabled={users?.totalPages <= page} onClick={() => handleNext()}><KeyboardArrowRightIcon/></button>
        </div>
    </div>
  )
}

export default Users