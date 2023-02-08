import React, { useRef, useState } from 'react';
import styles from '../../styles/Details.module.css'
import DetailsSwiper from '../../components/detailsSwiper';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RightLatest from '../../components/RightLatest';
const Details = () => {
  const [btnGroupShown, setBtnGroupShown] = useState(false);

  const btnShown = () => {
    setBtnGroupShown(prev => !prev);
  }
  return (
    <div className={styles.details__wrapper}>
        <DetailsSwiper/>
        <div className={styles.details__container}>
          <div className={styles.details__left}>
            <div className={styles.home__wrap}>
              <div className={styles.home__icon}>
                <HomeIcon/>
                <KeyboardArrowRightIcon/>
                <span>Featured</span>
              </div>
              <h1>Google To Boost Android Security In Few Days</h1>
              <div className={styles.details__pfgroup}>
                <div className={styles.details__profile}>
                  <span>by</span>
                  <img src='https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__480.jpg'/>
                  <span>Salman on March 06, 2021</span>
                </div>
                <div className={styles.details__comment}>
                  <ChatBubbleOutlineIcon fontSize='small'/>
                  <span>0</span>
                </div>
              </div>
              <div>
                <button>
                  <FacebookTwoToneIcon/>
                </button>
                <button>
                  <TwitterIcon/>
                </button>
                <button>
                  <PinterestIcon/>
                </button>
                <button>
                  <EmailIcon/>
                </button>
                <button onClick={btnShown}>
                  <MoreVertIcon/>
                </button>
              </div>
              <div className={`${btnGroupShown ? styles.detailsbtn__group : styles.details__btngroup}`}>
                <button>
                  <RedditIcon/>
                </button>
                <button>
                  <TelegramIcon/>
                </button>
                <button>
                  <WhatsAppIcon/>
                </button>
                <button>
                  <LinkedInIcon/>
                </button>
                <button>
                  <ExpandCircleDownIcon/>
                </button>
              </div>
            </div>
            <p>
              You audience. Least, the recently his repeat the this avarice 
              for the have and was on would before the concise bedding were hall politely 
              name be regretting have of even five of it the his are there again. 
              Word seven designer far lady problem will have work with you to fully understand your business to achieve.
            </p>
            <p>
              We work with clients big and small across a range of sectors and we utilize all forms of media 
              to get your name out there in a way that’s right for you. We believe that analysis of your 
              company and your customers is key in responding effectively to your promotional needs and 
              we will work with you.
            </p>
            <img src='https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817__480.jpg'/>
            <p>
              We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.
            </p>
            <h1>Starting a new company is easy</h1>
            <p>
            Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago.
            </p>
            <blockquote>
                Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic. 
            </blockquote>
            <p>
              And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.
            </p>
            <p>
              In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.
            </p>
            <h2>Going is circles will not help you</h2>
            <p>
              We’re here to help, we’ve written examples of web copy for over 40 industries for you to use at concept phase of your projects to bring a little life and realism to your designs and help you think about who and what you are designing for. We want clients and designers alike to think about their design and how it will work with the web copy, we want you think about how numbers, symbols and bullet points will look.
            </p>
            <p>
              When you just enter fake copy in rapid-fire fashion, you don't know what it really feels like to fill out that form. Do as your customers do and you'll understand them better. When you understand them better, and feel what they feel, you'll build a better interface. Clients big and small across a range of sectors and we all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively.
            </p>
            <p>
              And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.
            </p>
            <h3>Last things to note about success</h3>
            <p>
              In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.
            </p>
            <p>
              If rather, him the would treble-range wild any long of policy waved preparations disguised first initial that commitment had my in for spirits gradual solitary I for his absolutely with it and I to unable follow the to as every it the control and a of thinks the what's help days, with and paint, series at window and could we've offer, hard with king either written dry be are of princesses what there the now, identification guard to could flatter escape
            </p>
            <div className={styles.offer__feature}>
              <LocalOfferIcon/>
              <button>FEATURED</button>
            </div>
            <div className={styles.history__group}>
              <span>NEXT STORY <KeyboardArrowRightIcon/></span>
              <a href='#'>More than billion football fans attend Brazil world cup</a>
            </div>
            <div className={styles.detailleft__profile}>
              <img src='https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100__480.jpg'/>
              <div className={styles.detailleft__dev}>
                <a href='#'>Salman</a>
                <p>Blogger, Developer</p>
              </div>
            </div>
            <div className={styles.details__related}>
              <h2>RELATED POSTS</h2>
              <div className={styles.relate__container}>
                <div className={styles.relate__card}>
                  <a href='#'>
                    <img src='https://cdn.pixabay.com/photo/2014/11/17/20/55/girl-535251__480.jpg'/>
                  </a>
                  <a href=''>No escaping new high tech speed cameras</a>
                </div>
                <div className={styles.relate__card}>
                  <a href='#'>
                    <img src='https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104__480.jpg'/>
                  </a>
                  <a href=''>No escaping new high tech speed cameras</a>
                </div>
                <div className={styles.relate__card}>
                  <a href='#'>
                    <img src='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690__480.jpg'/>
                  </a>
                  <a href=''>No escaping new high tech speed cameras</a>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.comment__header}>
                <p>0 Comments</p>
                <button>Login</button>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div className={styles.details__right}>
            <div>
              <RightLatest/>
            </div>
            <div className={styles.popular__late}>
              <div className={styles.popular__header}>
                <h2>LATEST</h2>
                <span>/</span>
                <h2>POPULAR</h2>
              </div>
              <div className={styles.popular__card}>
                <div className={styles.relate__card}>
                  <a href='#'>
                    <img src='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690__480.jpg'/>
                  </a>
                  <a href=''>No escaping new high tech speed cameras</a>
                </div>
              </div>
              <div className={styles.small__popular}>
                <div className={styles.relate__popular}>
                  <a href='#'><img src='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690__480.jpg'/></a>
                  <p><a href='#'>No escaping new high tech speed cameras</a></p>
                </div>
                <div className={styles.relate__popular}>
                  <a href='#'><img src='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690__480.jpg'/></a>
                  <p><a href='#'>No escaping new high tech speed cameras</a></p>
                </div>
                <div className={styles.relate__popular}>
                  <a href='#'><img src='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690__480.jpg'/></a>
                  <p><a href='#'>No escaping new high tech speed cameras</a></p>
                </div>
                <div className={styles.relate__popular}>
                  <a href='#'><img src='https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690__480.jpg'/></a>
                  <p><a href='#'>No escaping new high tech speed cameras</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Details;