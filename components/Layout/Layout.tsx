import React from "react"
import NavBar from "@components/NavBar/NavBar"
import styles from './layout.module.css'

const Layout: React.FC = ({ children }: any) => {
    return (
        <div className={styles.container}>
            <NavBar />
            {children}
            <footer>this is the footer</footer>
        </div>
    )
}

export default Layout