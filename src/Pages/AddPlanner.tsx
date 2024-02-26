
import Container from '@mui/material/Container';
import Dropdown from 'react-dropdown';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { TextField } from '@mui/material';
interface componentNameProps { }

const AddPlanner = (props: componentNameProps) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const [selectedValue, setSelectedValue] = useState('');

  const onhandleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Container maxWidth="sm">
      <div className="container">
        <section>
          <form>
            <div className="row">
              <div className="col-75">
                <InputLabel style={{ color: "darkgreen", fontFamily: "sans-serif" }}>Name</InputLabel>

              </div>
              <div className="col-75">
              <TextField 
              inputProps={{maxLength:30,inputMode: 'text', pattern: '[A-Za-z]+'}}
               label="Outlined" variant="outlined" />
              </div>
            </div>
            <div>
              <InputLabel style={{ color: "darkgreen", fontFamily: "sans-serif" }}>Scheduling Lead time </InputLabel>
              <TextField 
              inputMode='numeric'
              inputProps={{maxLength:30,inputMode: 'numeric', pattern: '[A-Za-z]+'}}
               label="Outlined" variant="outlined" 
               placeholder='minutes'/>
            </div>
            <div>
              <InputLabel style={{ color: "darkgreen", fontFamily: "sans-serif" }}>Attendant Seats</InputLabel>
              <Select style={{width:230,height:50}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

            </div>
            <div>
              <InputLabel style={{ color: "darkgreen", fontFamily: "sans-serif" }}>Stretchers</InputLabel>
              <select value={selectedValue} onChange={onhandleChange}>
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div>
              <InputLabel style={{ color: "darkgreen", fontFamily: "sans-serif" }}>Acuity</InputLabel>
              <input type="password" maxLength={10}></input>
            </div>
            <div>
              <InputLabel style={{ color: "darkgreen", fontFamily: "sans-serif" }}>MultiLoad Allowed?</InputLabel>
              <input type="password" maxLength={10}></input>
            </div>
            <div>
              <InputLabel style={{ color: "darkgreen", fontFamily: "sans-serif" }}>Serviced By</InputLabel>
              <input type="password" maxLength={10}></input>
            </div>
            <div>
              <InputLabel style={{ color: "darkgreen", fontFamily: "sans-serif" }}>Parallel Pickups/Dropoffs</InputLabel>
              <input type="password" maxLength={10}></input>
            </div>
          </form>
        </section>
      </div>
    </Container>
  );
};

export default AddPlanner;
