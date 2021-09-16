import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Close, Dehaze } from '@material-ui/icons';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
               <h3 className="logo">HobbaDesigner</h3>
           <ul className={isMobile ? 'nav-links-mobile' : 'nav-link'}
           onClick={() => setIsMobile(false)}
           >
             <Link to="/" className="home">
                <li>الصفحة الرئيسية</li> 
             </Link>  
             <Link to="/Marka" className="marka">
                <li>ماركه</li> 
             </Link>  
             <Link to="/Order" className="order">
                <li>الطلبات</li> 
             </Link>  
             <Link to="/Type" className="type">
                <li>الاصناف</li> 
             </Link>  
           </ul>
           <div className="responsive" onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? (
                  <Close />
              ) : (
                  <Dehaze />
              )} 
           </div>
        </nav>
    )
}
export default Navbar
