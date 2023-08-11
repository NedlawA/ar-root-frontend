import "./NavBar.css"
import { TbSunMoon } from "react-icons/tb"

const NavBar = () => {
  return (
    <nav>
        <ul>
        <li><a href="https://www.wordreference.com">About</a></li>
        <li><a>FAQ</a></li>
        </ul>
        <button aria-label="theme switcher" id="theme-button"><TbSunMoon /></button>
    </nav>
  )
}

export default NavBar