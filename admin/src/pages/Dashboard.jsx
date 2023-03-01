

import '../styles/dashboard.css';
import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useEffect, useState } from 'react';
import { axiosAuth, axiosAuthUpload } from '../config/axios';
import CategoryIcon from '@mui/icons-material/Category';
import axios from 'axios';



const Dashboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const fetchAllUsers = async () => {
    const fetchuser = await (await axiosAuthUpload().get('http://localhost:5000/v1/users')).data;

    setAllUsers(fetchuser)
  }

  const fetchAllPosts = async () => {
    const fetchpost = await (await axiosAuthUpload().get('http://localhost:5000/v1/posts')).data;
    setAllPosts(fetchpost)
  }

  const fetchAllCategories = async () => {
    const fetchcategory = await (await axiosAuth().get('http://localhost:5000/v1/categories')).data;
    setAllCategories(fetchcategory)
  }

  useEffect(() => {
    fetchAllUsers()
    fetchAllPosts()
    fetchAllCategories()
  }, [])
  return (
      <div className='main-dashboard'>
        <h1>DASHBOARD</h1>
        <div className="dashboard__wrapper">
          <div className="dashboard__container">
            <div className='people__card'>
              <span className="dashboard__title">Users</span>
              <PeopleIcon className='dashboard__people'/>
            </div>
            <div className="dashboard__cards">
              <span className="dashboard__span">{allUsers.totalResults}</span>
            </div>
          </div>
          <div className="dashboard__container">
            <div className='people__card'>
              <span className="dashboard__title">Posts</span>
              <ImageIcon className='dashboard__people'/>
            </div>
            <div className="dashboard__cards">
              <span className="dashboard__span">{allPosts.totalResults}</span>
            </div>
          </div>
          <div className="dashboard__container">
            <div className='people__card'>
              <span className="dashboard__title">Categories</span>
              <CategoryIcon className='dashboard__people'/>
            </div>
            <div className="dashboard__cards">
              <span className="dashboard__span">{allCategories.totalResults}</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;