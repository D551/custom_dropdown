import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { formatManagersData } from './ManagersDropDownHelper'

import './ManagersDropDown.scss';

const ManagersDropDown = () => {
    const [managerData, setManagersData] = React.useState([]);
    const [_managerData, _setManagersData] = React.useState([]);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [textValue, setTextValue] = React.useState('');

    useEffect(() => {
        axios.get(`https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json`)
            .then(res => {
                const managers = formatManagersData(res.data);
                setManagersData(managers);
                _setManagersData(managers);
            })
    }, [])

    const getSeletedListText = (e) => {
        setTextValue(e.target.value);
        setShowDropdown(false);
    }

    const getContacts = (info) => {
        return (
            <button
                className='list-card'
                key={info.id}
                onClick={!info.notClickable && getSeletedListText}
                value={info.name}
            >

                {
                    info.firstName && info.lastName &&
                    < span className="div_name" style={{ background: info.profileColor }}>
                        {info.firstName[0] + info.lastName[0]}
                    </span>
                }
                <span className="span_name">
                    <div className='name'>{info.name}</div>
                    <div className="mail">{info.email}</div>
                </span>
            </button >
        )
    }

    const filterList = (options, searchTest) => {
        const filteredList = options.filter((option) => {
            return option.name.trim().toLowerCase().includes(searchTest.toLowerCase())
        })
        return filteredList
    }

    const onTextChange = (e) => {
        setTextValue(e.target.value)
        if (e.target.value.length) {
            const searchedlist = filterList(managerData, e.target.value.toLowerCase());
            if (searchedlist.length) {
                console.log(searchedlist)
                _setManagersData(searchedlist)
            } else {
                const noUserFoundData = {
                    email: "",
                    id: "0",
                    name: "No User Found !!",
                    profileColor: "rgb(220 221 227)",
                    notClickable: true
                }
                _setManagersData([noUserFoundData])
            }

        } else {
            _setManagersData(managerData)

        }
    }

    const onTextBoxFocus = () => {
        if (textValue.length) {
            _setManagersData(filterList(managerData, textValue.toLowerCase()))
        }
        setShowDropdown(true)
    }

    return (
        <div className='dropdown-container'>
            <input type="text"
                className='inputBox'
                onFocus={onTextBoxFocus}
                onChange={onTextChange}
                value={textValue}
                placeholder="Choose Manager"
            />
            {
                showDropdown &&
                <div className='list-container'>
                    {
                        _managerData?.map((manager) => {
                            return getContacts(manager)
                        })
                    }
                </div>
            }
        </div >
    )
};

ManagersDropDown.propTypes = {
};

ManagersDropDown.defaultProps = {
};

export default ManagersDropDown;
