import React from 'react';
import { categoriesDatas } from '../../../data/categoriesDatas';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PostsViews = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/categories/categoriesaddnews')
    }
  return (
    <div>
        <div className='posts__header'>
            <h2>Categories Details</h2>
            <button onClick={handleClick}>Add New</button>
        </div>
      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created At:</th>
            <th>Updated At:</th>
            <th>Action</th>
        </tr>
        {
            categoriesDatas.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
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