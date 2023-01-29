

import '../styles/dashboard.css';
import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


const Dashboard = () => {
  return (
      <div>
        <h1>DASHBOARD</h1>
        <div className="dashboard__wrapper">
          <div className="dashboard__container">
            <div className='people__card'>
              <span className="dashboard__title">Users</span>
              <PeopleIcon className='dashboard__people'/>
            </div>
            <div className="dashboard__cards">
              <span className="dashboard__span">13.5K</span>
            </div>
          </div>
          <div className="dashboard__container">
            <div className='people__card'>
              <span className="dashboard__title">Posts</span>
              <ImageIcon className='dashboard__people'/>
            </div>
            <div className="dashboard__cards">
              <span className="dashboard__span">135K</span>
            </div>
          </div>
          <div className="dashboard__container">
            <div className='people__card'>
              <span className="dashboard__title">Comments</span>
              <ChatBubbleIcon className='dashboard__people'/>
            </div>
            <div className="dashboard__cards">
              <span className="dashboard__span">187K</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;