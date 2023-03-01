
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Layout/main';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import PostsAdds from './components/posts/postsadds/PostsAdds';
import PostsEdit from './components/posts/postsedits/PostsEdit';
import Categories from './pages/Categories';
import Users from './pages/Users';
import Usersadds from './components/users/usersadds/Usersadds';
import Settings from './pages/Settings';
import MyDeatails from './cards/myDetails/MyDeatails';
import Profile from './cards/Profile/Profile';
import Notification from './cards/Notification/Notification';

import ErrorMessage from './components/Layout/error';
import Error from './pages/Error';
import CategoriesAddnews from './components/categories/categoriesAddnew/CategoriesAddnews';
import Login from './Login/Login';
import CategoriesEdit from './components/categories/categoriesEdits/CategoriesEdit';
import Usersedits from './components/users/usersedits/Usersedits';
import { useSelector } from 'react-redux';


function App() {

  return (

        <div className='app'>
          <Routes>
            <Route path='/' element={<Navigate to="/login" element={<Login/>}/>}/>
              <Route path='login' element={<Login/>}/>
            <Route path='/admin' element={<Main/>}>
              {/* <Route path='dashboard' element={<Navigate to="/dashboard" element={<Dashboard/>}/>}/> */}
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='posts' element={<Posts/>}/>
              <Route path='posts/postsadds' element={<PostsAdds/>}/>
              <Route path='posts/postsedits/:id' element={<PostsEdit/>}/>
              <Route path='categories' element={<Categories/>}/>
              <Route path='categories/categoriesaddnews' element={<CategoriesAddnews/>}/>
              <Route path='categories/categoriesedit/:id' element={<CategoriesEdit/>}/>
              <Route path='users' element={<Users/>}/>
              <Route path='users/usersadds' element={<Usersadds/>}/>
              <Route path='users/usersedit/:id' element={<Usersedits/>}/>
              <Route path='settings' element={<Settings/>}>
                <Route path='mydetails' element={<MyDeatails />} />
                <Route path='profile' element={<Profile/>}/>
                <Route path='notification' element={<Notification/>}/>  
              </Route> 
            </Route>
            <Route path='*' element={<ErrorMessage/>}>
              <Route path='*' element={<Error/>}/>
            </Route>
          </Routes>
        </div>
  )
}

export default App
