import { Link } from "react-router-dom"
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

function darkModeLocalstorage(){
  return localStorage.getItem("mode") || themes.light;
}

const themes = {
  dark:"dark",
  light:"light"
}


function Navbar() {
const [theme, setTheme] = useState(darkModeLocalstorage())
const handleClick = () =>{
const newTheme = theme == themes.light ? themes.dark : themes.light
setTheme(newTheme)
localStorage.setItem("mode", newTheme)

}


useEffect(() =>{
document.documentElement.setAttribute("data-theme", theme)
},[theme])
  return (
    <div className="navbar mb-10">
      <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center">
        <Link className="btn btn-primary btn-lg font-bold text-2xl px-2" to="/">
          MyK
        </Link>
       <div className="flex gap-10 items-center cursor-pointer">

       <label className="swap swap-rotate" >
  
  {/* this hidden checkbox controls the state */}
  <input onClick={handleClick} type="checkbox"
    defaultChecked={theme == "dark" ? false : true}/>
  
  {/* sun icon */}
  <IoSunnyOutline  className="swap-off fill-current w-8 h-8" />
  
  {/* moon icon */}
  <IoMoonOutline className="swap-on fill-current w-8 h-8" />
  
</label>
        <Link to="/create" className="btn btn-secondary">create</Link>
       </div>
      </div>
    </div>
  )
}

export default Navbar