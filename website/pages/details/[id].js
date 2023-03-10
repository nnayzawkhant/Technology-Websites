import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/Details.module.css'
// import DetailsSwiper from '../../components/detailsSwiper';
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
import axios from 'axios';
import {format} from "timeago.js";
import Link from 'next/link';
import Image from 'next/image';
import DetailsSwiper from '../../components/DetailsSwiper';
const Details = ({posts, cat, relatedPosts}) => {
  console.log(relatedPosts)
  const [btnGroupShown, setBtnGroupShown] = useState(false);

  const btnShown = () => {
    setBtnGroupShown(prev => !prev);
  }
  return (
    <div className={styles.details__wrapper} >
        <DetailsSwiper cat={cat}/>
        <div className={styles.details__container}>
          <div className={styles.details__left}>
            <div className={styles.home__wrap}>
              <div className={styles.home__icon}>
                <HomeIcon/>
                <KeyboardArrowRightIcon/>
                <span>{posts?.category?.categoryname}</span>
              </div>
              <h1>{posts.title}</h1>
              <div className={styles.details__pfgroup}>
                <div className={styles.details__profile}>
                  <span>by</span>
                  <img src={posts?.user?.profilePic}/>
                  <span>{posts?.user?.name} {format(posts?.user?.createdAt)}</span>
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
              <p dangerouslySetInnerHTML={{ __html: posts.desc }} />
            <Image src={posts.photo} width={1000} height={500} alt=''/>
            <p dangerouslySetInnerHTML={{ __html: posts.desc }} />
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
              <a href={`/categories/${posts?.category?.id}`}><button>{posts?.category?.categoryname}</button></a>
              <p>{posts.viewCounts} views</p>
            </div>
            <div className={styles.history__group}>
              <span>NEXT STORY <KeyboardArrowRightIcon/></span>
              <Link href='#'>{posts.title}</Link>
            </div>
            <div className={styles.detailleft__profile}>
              <img src={posts.user.profilePic}/>
              <div className={styles.detailleft__dev}>
                <a href='#'>{posts.user.name}</a>
                <p>Blogger, Developer</p>
              </div>
            </div>
            <div className={styles.details__related}>
              <h2>RELATED POSTS</h2>
              <div className={styles.relate__container}>
                {
                  relatedPosts?.map((item, i) => {
                    return (
                      <div className={styles.relate__card} key={i}>
                        
                          <Link href={item.id} passHref>
                            <Image src={item.photo} alt='' width={500} height={300}/>
                            <span>{item.title}</span>
                          </Link>
                      </div>
                    )
                  })
                }
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
};

export const getServerSideProps = async ({params}) => {
  const finalRes = await (await axios.get(`http://localhost:5000/v1/posts/public/posts/${params.id}`)).data;

  // let categoryId = await res.category
  // const singlePost = (await axios.get(`http://localhost:5000/v1/categories/public/latest_categories/${categoryId}`)).data

  // let userId = await res.user
  // const singleUser = (await axios.get(`http://localhost:5000/v1/users/public/latest_users/${userId}`)).data
   
  // let finalRes = {...res, category: singlePost, user: singleUser}

  const cats = await (await axios.get(`http://localhost:5000/v1/posts/public/latest_posts/`)).data;

  const relate = await (await axios.get(`http://localhost:5000/v1/posts/public/latest_posts/?limit=3`)).data;

  const updateCounts = await axios.patch(`http://localhost:5000/v1/posts/public/posts/${params.id}`);


  return {
      props: {
          posts: finalRes,
          cat : cats.results,
          relatedPosts: relate.results
      },
  }
};

// export const getSecondServerSideProps = async () => {
  

//   return {
//       props: {
//           cats: res,
//       },
//   }
// };

export default Details;

