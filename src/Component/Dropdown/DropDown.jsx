import React from 'react';
import PropTypes from 'prop-types';

import './DropDown.scss';

const ManagersDropDown = (
    {
        options,
        placeholder,
        onChange
    }
) => {
    const [_options, _setOptions] = React.useState(options);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [textValue, setTextValue] = React.useState('');

    const getSeletedListText = (e) => {
        setTextValue(e.target.value);
        setShowDropdown(false);
        onChange();
    }

    const createOptionsList = (info) => {
        return (
            <button
                className='list-card'
                key={info.id}
                onClick={!info.notClickable && getSeletedListText}
                value={info.name}
            >
                {
                    info.firstName && info.lastName &&
                    < span className="color-icon" style={{ background: info.profileColor }}>
                        {info.firstName[0] + info.lastName[0]}
                    </span>
                }
                <span className="users-info">
                    <div className='name'>{info.name}</div>
                    <div className="mail">{info.email}</div>
                </span>
            </button>
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
            const searchedlist = filterList(options, e.target.value.toLowerCase());
            if (searchedlist.length) {
                _setOptions(searchedlist)
            } else {
                const noUserFoundData = {
                    email: "",
                    id: "0",
                    name: "No User Found !!",
                    profileColor: "rgb(220 221 227)",
                    notClickable: true
                }
                _setOptions([noUserFoundData])
            }

        } else {
            _setOptions(options)

        }
    }

    const onTextBoxFocus = () => {
        if (textValue.length) {
            _setOptions(filterList(options, textValue.toLowerCase()))
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
                placeholder={placeholder}
            />
            {
                showDropdown &&
                <div className='list-container'>
                    {
                        _options?.map((manager) => {
                            return createOptionsList(manager)
                        })
                    }
                </div>
            }
        </div >
    )
};

ManagersDropDown.propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

ManagersDropDown.defaultProps = {
    options: [],
    placeholder: '',
    onChange: () => { },
};

export default ManagersDropDown;
