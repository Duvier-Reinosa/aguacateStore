import React from "react"
import NavBar from "@components/NavBar/NavBar"

const Layout: React.FC = ({ children }: any) => {
    return (
        <div>
            <NavBar />
            {children}
            <footer>this is the footer</footer>
        </div>
    )
}

export default Layout