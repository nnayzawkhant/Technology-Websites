import React from 'react';
import './postsviews.css';
import { postsDatas } from '../../../data/postsDatas';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PostsViews = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/posts/postsadds')
    }
  return (
    <div>
        <div className='posts__header'>
            <h2>Posts Details</h2>
            <button onClick={handleClick}>Add Post</button>
        </div>
      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Categories</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        {
            postsDatas.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><img src={item.image}/></td>
                        <td>{item.categoriesName}</td>
                        <td>{item.date}</td>
                        <td>
                            <div className='post__icon'>
                                <EditIcon className='edit'/><DeleteIcon className='delete'/>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    </table>
    </div>
  )
}

export default PostsViews