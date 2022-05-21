import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './ManagersDropDown.scss';

const ManagersDropDown = () => {
    const [managerData, setManagersData] = React.useState([]);
    const [_managerData, _setManagersData] = React.useState([]);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [textValue, setTextValue] = React.useState('');

    useEffect(() => {
        axios.get(`https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json`)
            .then(res => {
                const managers = res.data;
                setManagersData(managers.data);
                _setManagersData(managers.data);
            })
    }, [])

    const getSeletedListText = (e) => {
        setTextValue(e.target.innerHTML)
        setShowDropdown(false)
    }

    const getContacts = (info) => {
        return (
            <div
                className='list-card'
                key={info.id}
                onClick={getSeletedListText}
            >
                <div style={{ border: '1px solid', margin: 'auto' }}>{info.firstName[0] + info.lastName[0]}</div>
                {info.name}
            </div >
        )
    }

    const onTextChange = (e) => {
        setTextValue(e.target.value)
        if (e.target.value.length) {
            const filteredList = managerData.filter((manager) => {
                return manager.attributes.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            _setManagersData(filteredList)
        } else {
            _setManagersData(managerData)

        }
    }

    const onTextBoxFocus = () => {
        if (textValue.length) {
            const filteredList = managerData.filter((manager) => {
                return manager.attributes.name.toLowerCase().includes(textValue.toLowerCase())
            })
            _setManagersData(filteredList)
        }
        setShowDropdown(true)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="text"
                className='inputBox'
                onFocus={onTextBoxFocus}
                //onBlur={() => { setShowDropdown(false) }}
                onChange={onTextChange}
                value={textValue}
                placeholder="Choose Manager"
            />
            {showDropdown &&
                <div className='list-container'>
                    {
                        _managerData?.map((manager) => {
                            return getContacts(manager.attributes)
                        })
                    }
                </div>
            }
        </div>
    )
};

ManagersDropDown.propTypes = {
};

ManagersDropDown.defaultProps = {
};

export default ManagersDropDown;
