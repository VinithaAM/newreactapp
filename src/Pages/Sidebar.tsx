import { Icon, List, ListItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React,{ CSSProperties, useState } from "react";
import {Link} from 'react-router-dom';

const Sidebar = () => {
  // const MenuContext = React.createContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
      const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;
    return(
      // <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      <nav className={menuOpen ? 'open' : ''}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Planner</Link>
        </li>
        {/* <li>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
    // <MenuIcon onClick={toggleMenu} />
    // </MenuContext.Provider>
    );

}
export default Sidebar;

// import Container from '@mui/material/Container';
// interface componentNameProps {}

// const AddPlanner = (props: componentNameProps) => {
//   return (
//     <nav
//     className="d-none d-md-block bg-light sidebar"
//     // style={{ width: sidebarCollapsed ? '56px' : '' }}
//   >
//         <List>
//       <ListItem
//         // onClick={() => dispatch(updateSidebar())}
//         className="nav-item"
//         style={listItemStyle}
//       >
//         {/* <Icon
//           style={{ float: sidebarCollapsed ? 'left' : 'right' }}
//           icon={sidebarCollapsed ? 'right-arrow' : 'left-arrow'}
//         /> */}
//       </ListItem>
//       </List>
//     </nav>
//   );
// };

// export default Sidebar;
