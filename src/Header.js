import "./App.css";
import {AppBar}  from "@mui/material";
import {Link} from "react-router-dom";
import {FaGraduationCap} from 'react-icons/fa';
import {GiTrophyCup} from 'react-icons/gi';
import {CgProfile} from 'react-icons/cg';
import {SiGoogleclassroom} from 'react-icons/si';
import {VscCircuitBoard} from 'react-icons/vsc';
import {AiOutlineBell} from 'react-icons/ai';
import {RiCopperCoinFill} from 'react-icons/ri';


export default function Header(){
    return(
        <AppBar>
            
            <div className="header">

            <div className='title'>
            <img src="https://game4skill.it/wp-content/uploads/2021/04/cropped-logo-g4s.png" alt="default"/>
            </div>

            <div className='link'>
                
                <Link to = "/Courses" style={{ color: 'inherit', textDecoration: 'inherit'}}> <button className="button-link" type="button" style={{color:'orange',outline:'none'}}> <span className="gap"> <span className="logo"><FaGraduationCap /></span>Courses</span></button></Link>
                <Link to ="/Leaderboards" style={{ color: 'inherit', textDecoration: 'inherit'}}><button className="button-link" type="button" style={{color:'orange',outline:'none'}}> <span className="gap"> <span className="logo"><GiTrophyCup /> </span>Leaderboards</span></button></Link>
                <Link to ="/Profile" style={{ color: 'inherit', textDecoration: 'inherit'}}><button className="button-link" type="button" style={{color:'orange',outline:'none'}}><span className="gap"><span className="logo"><CgProfile/></span> Profile</span></button></Link>
                <Link to ="/Classrooms" style={{ color: 'inherit', textDecoration: 'inherit'}}><button className="button-link" type="button" style={{color:'orange',outline:'none'}}><span className="gap"><span className="logo"><SiGoogleclassroom/></span> Classrooms</span></button></Link>
                <Link to="/BulletinBoard" style={{ color: 'inherit', textDecoration: 'inherit'}}><button className="button-link" type="button" style={{color:'orange',outline:'none'}}><span className="gap"><span className="logo"><VscCircuitBoard/> </span>BulletinBoard</span></button></Link>
                <Link to="/Notification" style={{ color: 'inherit', textDecoration: 'inherit',outline:'none'}}><button className="bell" type="button" ><AiOutlineBell/></button></Link>
                
               
                <nav className="navbar navbar-light bg-light navbar-expand-sm">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbar-list-4">
    <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="https://www.pngitem.com/pimgs/m/146-1468843_profile-icon-orange-png-transparent-png.png" width="40" height="40" className="rounded-circle" alt="default"/>
          <h5 className="name">Name Surname <br/> <RiCopperCoinFill/> 1389 </h5>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/#">Dashboard</a>
          <a className="dropdown-item" href="/#">Edit Profile</a>
          <a className="dropdown-item" href="/#">Log Out</a>
        </div>
      </li>   
    </ul>
  </div>
</nav>               
            </div>         
            </div>           
        </AppBar>
    )
}