import React from 'react'
import Sidebar from './Sidebar'
import styles from './Home.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className={styles.pagecomponent}>
        <div><Sidebar /></div>
        <div><Outlet /></div>
      </div>
    </div>
  )
}
