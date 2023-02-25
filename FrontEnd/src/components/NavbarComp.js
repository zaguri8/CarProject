import './NavbarComp.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


export default function NavbarComp(){
  return(
    
    <nav className="nav">
      <div>
      <img  className="implogo" src="images/logo.png" alt="the logo"/>
    </div>
      <Link to="/" className="site-title">
      24 Car
      </Link>
      <ul>
        <CustomLink to="/MyCustomers">הלקוחות שלי</CustomLink>
        <CustomLink to="/myCars"> הרכבים שלי</CustomLink>
        <CustomLink to="/RentalJournal"> היסטוריית השכרות</CustomLink>
        <CustomLink to="/AddCustomer">  לקוח חדש</CustomLink>
        <CustomLink to="/Schedule">  יומן שריונים</CustomLink>

      </ul>
    </nav>
    
  )

}

