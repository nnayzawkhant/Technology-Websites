import React, { useState } from 'react';
import styles from '../../styles/Secondnavbar.module.css'
import Link from 'next/link';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { navbarDatas } from '../../pages/navbarDatas';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { cultureDatas } from '../../pages/cultureDatas';
import { politicsDatas } from '../../pages/politicsDatas';
import { fireDatas } from '../../pages/fireDatas';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { menuDatas } from '../../pages/menuDatas';



const SecondNav = () => {
  const [isShown, setIsShown] = useState(false);

  const [cultureShown, setCultureShown] = useState(false);

  const [fire, setFire] = useState(false);

  const [shareShown, setShareShown] = useState(false);

  const [searchShown, setSearchShown] = useState(false);

  const [menuShown, setMenuShown] = useState(false)

  const [details, setDetails] = useState(0);

  const [culturePage, setCulturePage] = useState(0);

  const handleMenuShown = () => {
    setMenuShown(men => !men)
  }

  const handleSearchShown = () => {
    setSearchShown(ser => !ser)
  }

  const handleShareShown = () => {
    setShareShown(nev => !nev)
  }

  const handleClick = () => {
    setFire(prev => !prev)
  }

  const handleMouseOver = () => {
    setIsShown(true)
  }

  const handleMouseOut = () => {
    setIsShown(false)
  }


  const handleCultureOver = () => {
    setCultureShown(true);
  }

  const handleCultureOut = () => {
    setCultureShown(false)
  }

  const handleChecked = (index) => {
    console.log(index)
    setDetails(index)
  }

  const handleCulture = (index) => {
    console.log(index)
    setCulturePage(index)
  }

  return (
    <>
      <div className={styles.second__wrapper}>
      <div><h1>Hello</h1></div>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <span onMouseOver={handleMouseOver}>AFRICA</span>
            <KeyboardArrowDownIcon onMouseOver={handleMouseOver} fontSize='small'/>
          </li>
          <li>
            <span onMouseOver={handleCultureOver}>CULTURE</span>
            <KeyboardArrowDownIcon onMouseOver={handleMouseOver} fontSize='small'/>
          </li>
          <li>
          <div class={styles.dropdown}>
            <div className={styles.politics__drop}>
              <span class={styles.dropbtn}>POLITICS</span>
              <KeyboardArrowDownIcon fontSize='small'/>
            </div>
            <div class={styles.dropdown__content}>
              <a href="#">Hockey</a>
              <a href="#">Cricket</a>
              <a href="#">Boxing</a>
            </div>
          </div>
          </li>
          <li>
            <Link href="/sports">SPORTS</Link>
            <span className={styles.sport__span}>new</span>
          </li>
          <li>
            <Link href="/boxed">BOXED</Link>
          </li>
          <li>
            <Link href="/reviews">REVIEWS</Link>
          </li>
        </ul>
      </nav>
      <div>
      
        <div>
          <IconButton  color="inherit" onClick={handleClick}>
              <LocalFireDepartmentOutlinedIcon /> 
          </IconButton>
          <IconButton  color="inherit" onClick={handleShareShown}>
              <ShareSharpIcon /> 
          </IconButton>
          <IconButton  color="inherit" onClick={handleSearchShown}>
              <SearchIcon /> 
          </IconButton>
          <IconButton  color="inherit" onClick={handleMenuShown}>
              <MenuIcon /> 
          </IconButton>
        </div>
      </div>

    </div>
    <div className={styles.second__grid}>
      {isShown && (
        <div
        className={`${isShown ? styles.container : styles.not__container}`} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >
          <div className={styles.left}>
            {navbarDatas.map((item, i) => {
              return    <div className={styles.second__card} key={i} onClick={() => handleChecked(i)}>
                          <div className={styles.second__title}>{item.title}</div>
                          <NavigateNextIcon/>
                        </div>
            })}
          </div>

          <div className={styles.right}>
            {navbarDatas[details].element}
          </div>
          
        </div>
      )}
    </div>
    <div className={styles.second__grid}>
      {cultureShown && (
        <div
        className={`${cultureShown ? styles.container : styles.not__container}`} 
        onMouseOver={handleCultureOver}
        onMouseOut={handleCultureOut}
        >
          <div className={styles.left}>
            {cultureDatas.map((item, i) => {
              return    <div className={styles.second__card} key={item.title} onClick={() => handleCulture(i)}>
                          <div className={styles.second__title}>{item.title}</div>
                          <NavigateNextIcon/>
                        </div>
            })}
          </div>

          <div className={styles.right}>
            {cultureDatas[culturePage].element}
          </div>
          
        </div>
      )}
    </div>
    <div className={`${fire ? styles.second__fire: styles.second__block}`}>
      <ul>
        {fireDatas.map((item, i) => {
          return(
            <div key={i} className={styles.fire__data}>
              <img src={item.image} alt=''/>
              <a href='#'>{item.info}</a>
            </div>
          )
        })}
      </ul>
    </div>
    <div className={`${shareShown ? styles.share__icon : styles.share__icon_group}`}>
      <IconButton sx={{ ml: 1 }} color="inherit">
        <TwitterIcon fontSize='small'/> 
      </IconButton>
      <IconButton sx={{ ml: 1 }} color="inherit">
        <FacebookOutlinedIcon fontSize='small'/> 
      </IconButton>
      <IconButton sx={{ ml: 1 }} color="inherit">
        <InstagramIcon fontSize='small'/> 
      </IconButton>
      <IconButton  color="inherit">
        <PinterestIcon fontSize='small' /> 
      </IconButton>
    </div>
    <div className={`${searchShown ? styles.search__icon : styles.search__icon_group}`}>
      <input type='text' placeholder='Search' className={styles.input__text}/>

    </div>
    <div className={styles.menu__card}>
      <div className={`${menuShown ? styles.small__menu : styles.menu__card__group}`}>
        {menuDatas.map((item, i) => {
          return (
            <ul key={i} className={styles.menu__ul}>
              <li className={styles.menu__li}><a href="#">{item.name}</a>
                <ul className={styles.menu__small_li}>
                  <li><a href="#">{item.infoOne}</a></li>
                  <li><a href="#">{item.infoTwo}</a></li>
                  <li><a href="#">{item.infoThree}</a></li>
                </ul>
              </li>
          </ul>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default SecondNav;

