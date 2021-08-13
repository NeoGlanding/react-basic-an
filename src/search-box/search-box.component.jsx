import React from 'react'
import './search-box.styles.css'

function SearchBox(props) {
    return (
        <input
            className="search"
            type="search"
            placeholder={props.placeHolder}
            onChange={props.changeHandler} />
    )
}

export default SearchBox
