import React from 'react';
import { usersDatas } from '../../../data/usersDatas';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PostsViews = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/users/usersadds')
    }
  return (
    <div>
        <div className='posts__header'>
            <h2>Users Details</h2>
            <button onClick={handleClick}>Add User</button>
        </div>
      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
        </tr>
        {
            usersDatas.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
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