import { Icon, List, ListItem } from "@mui/material";
import { CSSProperties } from "react";

const Sidebar = () => {
    const listItemStyle: CSSProperties = {
        cursor: 'pointer',
      }
    return(
        <nav
        className="d-none d-md-block bg-light sidebar"
        // style={{ width: sidebarCollapsed ? '56px' : '' }}
      >
            <List>
          <ListItem
            // onClick={() => dispatch(updateSidebar())}
            className="nav-item"
            style={listItemStyle}
          >
            {/* <Icon
              style={{ float: sidebarCollapsed ? 'left' : 'right' }}
              icon={sidebarCollapsed ? 'right-arrow' : 'left-arrow'}
            /> */}
          </ListItem>
          </List>
        </nav>
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
