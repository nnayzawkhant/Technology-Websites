import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import styles from '../../styles/Firstnavbar.module.css';
import { IconButton, Link, useTheme } from '@mui/material';

const FirstNav = () => {
  return (
    <div className={styles.first__navbar} >
        <ul>
            <Link>
                <li>Home</li>
            </Link>
            <Link>
                <li>About</li>
            </Link>
            <Link>
                <li>Pravicy Policy</li>
            </Link>
            <Link>
                <li>Hiring</li>
            </Link>
        </ul>
        <div className={styles.nav__right}>
            <div className={styles.date__wrapper}>
                <CalendarMonthIcon fontSize='small' className={styles.clendar__icon}/>
                <p>30 January 2023</p>
            </div>
            <div>
            <IconButton sx={{ ml: 1 }} color="inherit">
               <Brightness7Icon fontSize='small'/> 
            </IconButton>
            </div>
        </div>
    </div>
  )
}

export default FirstNav