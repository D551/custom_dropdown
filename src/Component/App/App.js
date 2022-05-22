import React, { useEffect } from 'react'
import axios from 'axios';
import './App.scss';
import ManagersDropDown from '../Dropdown/DropDown';
import { formatManagersData } from '../Dropdown/DropDownHelper';
import { Constants } from '../../Constants/lcaleConstants'

function App() {
  const [options, setOptions] = React.useState([]);

  useEffect(() => {
    axios.get(`https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json`)
      .then(res => {
        const managers = formatManagersData(res.data);
        setOptions(managers);
      })
  }, []);

  const onSelect = () => { }

  return (
    <div className="App">
      {options.length && <ManagersDropDown options={options} placeholder={Constants.PLACEHOLDER} onChange={
        (e) => { console.log(e) }}
      />}
    </div>
  );
}

export default App;
