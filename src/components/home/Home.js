import React from 'react'
import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import styles from './Home.module.css';
import Table from './Table';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className={styles.pagecomponent}>
        <Sidebar />
        <Table />
      </div>
    </div>
  )
}
