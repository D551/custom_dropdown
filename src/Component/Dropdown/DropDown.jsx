import React from 'react';
import PropTypes from 'prop-types';
import { NO_USER_FOUND_OBJECT } from '../../Constants/appConstants';

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
    const [focusedElement, setFocusedElement] = React.useState(0);

    const getSeletedListText = (e) => {
        setTextValue(e.target.value);
        setShowDropdown(false);
        const selectedOption = options.filter((x) => { return x.id === e.target.id })
        onChange(selectedOption[0]);
    }

    const onKeyDown = (e) => {
        const index = _options.findIndex(x => {
            return x.id === focusedElement;
        });
        if (e.which === 40) {
            const selected = _options[index + 1]?.id;
            selected && document.getElementById(selected).focus();
        }
        else if (e.which === 38) {
            const selected = _options[index - 1]?.id
            selected && document.getElementById(selected).focus();
        }
    };

    const createOptionsList = (info) => {
        return (
            <button
                className='list-card'
                key={info.id}
                onClick={!info.notClickable ? getSeletedListText : () => { }}
                value={info.name}
                id={info.id}
                aria-label={info.name}
                onFocus={() => { setFocusedElement(info.id) }}
            >
                {
                    info.firstName && info.lastName &&
                    <span className="color-icon" style={{ background: info.profileColor }}>
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
            return option.name.toLowerCase().replaceAll(/\s/g, '')
                .includes(searchTest.toLowerCase().replaceAll(/\s/g, ''))
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
                _setOptions([NO_USER_FOUND_OBJECT])
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

    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowDropdown(false);
        }
    };

    return (
        <div className='dropdown-container'
            onBlur={handleBlur}>
            <div className="inputWrap">
                <input type="text"
                    className='inputBox'
                    onFocus={onTextBoxFocus}
                    onChange={onTextChange}
                    value={textValue}
                    placeholder={placeholder}
                    data-testid="input-box"
                    onKeyDown={(e) => { e.which === 40 && document.getElementById(_options[0].id).focus() }}
                />
                <i className={showDropdown ? 'arrow up' : 'arrow down'}
                    onClick={() => { setShowDropdown(!showDropdown) }}
                />
            </div >
            {
                showDropdown &&
                <div className='list-container' data-testid="list-container" onKeyDown={onKeyDown}>
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
