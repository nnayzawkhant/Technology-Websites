import React from 'react';
import { commentsDatas } from '../../../data/commentsDatas';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentsViews = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admin/comments/commentsadds')
    }
  return (
    <div className='main'>
        <div className='posts__header'>
            <h2>Posts Details</h2>
            <button onClick={handleClick}>Add Comment</button>
        </div>
      <table>
        <tr>
            <th>Id</th>
            <th>Comments</th>
            <th>Author Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        {
            commentsDatas.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.comment}</td>
                        <td>{item.authorName}</td>
                        <td>{item.status}</td>
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

export default CommentsViews