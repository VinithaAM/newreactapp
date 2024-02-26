
import Header from '../Component/Header';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


interface componentNameProps {}

const componentName = () => {
  return (
    <div className="App">
        <Header></Header>
        <div>
            <span>
                <h3>Planners</h3>
                <p>
                    Add Planner to allow customers to schedu;e their own trips. Each planner represent a virtual vehicle that limits the numbre and type of transfers that can be scheduled
                </p>
            </span>
            <div>
            <AddCircleOutlineIcon
            color="primary"
            fontSize='small'
            >
            </AddCircleOutlineIcon>
            <span style={{color:"primary",fontSize:15,margin:10,marginTop:0}}>
                    Add New Planner
                </span>
                </div>
            <Button variant="contained" style={{margin:8,padding:5}}>
               <span style={{color:"white",fontWeight:"bold"}}>
               Save
                </span> 
                </Button>

            <Button variant="contained" style={{margin:8,padding:5}} color="inherit">
            <span style={{color:"black",fontWeight:"bold"}}>
            Cancel
                </span> </Button>
        </div>
  </div>
  );
};

export default componentName;


