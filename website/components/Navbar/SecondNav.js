import React, {useEffect, useState} from 'react';
import styles from '../../styles/Secondnavbar.module.css';
import Link from 'next/link';
import LocalFireDepartmentOutlinedIcon
  from '@mui/icons-material/LocalFireDepartmentOutlined';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from '@mui/material';
import {navbarDatas} from '../../pages/navbarDatas';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {cultureDatas} from '../../pages/cultureDatas';
import {politicsDatas} from '../../pages/politicsDatas';
import {fireDatas} from '../../pages/fireDatas';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {menuDatas} from '../../pages/menuDatas';
import axios from 'axios';

const SecondNav = () => {
  const [allCats, setAllCats] = useState([])

  const fetchCat = async () => {
    const cats = await (await axios.get(`http://localhost:5000/v1/categories/public/latest_categories/?page=1&limit=4`)).data;
    setAllCats(cats)
    console.log(cats)

  }

  useEffect(() => {
    fetchCat()
  }, [])
  

  return (
    <div className={styles.second__wrapper}>
      <div><h1>Technology</h1></div>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          {
            allCats?.results?.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={`/categories/${item.id}`}>{item.categoryname}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  );
};

export default SecondNav;
