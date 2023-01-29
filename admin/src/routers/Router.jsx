import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import Settings from '../pages/Settings';
import MyDeatails from '../cards/myDetails/MyDeatails';
import Profile from '../cards/Profile/Profile';
import Notification from '../cards/Notification/Notification';
import Categories from '../pages/Categories';
import Users from '../pages/Users';
import Posts from '../pages/Posts';
import CategoriesViews from '../components/categories/categoriesViews/CategoryViews';
import CategoriesAddnews from '../components/categories/categories/categoriesadds/categoriesAddnew/CategoriesAddnews';
import Usersviews from '../components/users/usersviews/Usersviews';
import Usersadds from '../components/users/usersadds/usersadds';
import PostsAdds from '../components/posts/postsadds/PostsAdds';
import PostsViews from '../components/posts/postsviews/PostsViews';
import Comments from '../pages/Comments';
import CommentsAdds from '../components/comments/commentsAdds/CommentsAdds';
import CommentsViews from '../components/comments/commentsViews/CommentsViews';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" element={<Dashboard/>}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/posts' element={<Posts/>}>
          <Route path='postsadds' element={<PostsAdds/>}/>
          <Route path='postsviews' element={<PostsViews/>}/>
        </Route>
        <Route path='/categories' element={<Categories/>}>
          <Route path='categoriesaddnews' element={<CategoriesAddnews/>}/>
          <Route path='categoriesviews' element={<CategoriesViews/>}/>
        </Route>
        <Route path='/users' element={<Users/>}>
          <Route path='usersadds' element={<Usersadds/>}/>
          <Route path='usersviews' element={<Usersviews/>}/>
        </Route>
        <Route path='/comments' element={<Comments/>}>
          <Route path='commentsadds' element={<CommentsAdds/>}/>
          <Route path='commentsviews' element={<CommentsViews/>}/>
        </Route>
        <Route path='/settings' element={<Settings/>}>
          <Route path='mydetails' element={<MyDeatails />} />
          <Route path='profile' element={<Profile/>}/>
          <Route path='notification' element={<Notification/>}/>  
        </Route> 
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default Router