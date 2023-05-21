import { Outlet, NavLink } from "react-router-dom"
import Menu from "../Menu/Menu.jsx";

const activeMenu = ({isActive}) => isActive ? 'activeMenu' : ''

const Layout = () => {
    return (
        <>
            <Menu/>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/newPost'} className={activeMenu}>
                           Create Post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/posts'} className={activeMenu}>
                           Posts
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <footer>
                +996508393939 CALL CENTER
            </footer>
        </>
    )
}
export default Layout