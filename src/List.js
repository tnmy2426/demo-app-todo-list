import React from 'react';
import './List.css';

const List = (props) => {

    return (
        <div className='todo-style'>
            <i 
            className="fa fa-times" 
            aria-hidden='true' 
            onClick={()=>{
                props.onDelete(props.id)
            }} />
            <li>{props.text}</li>
        </div>
    )
}

export default List
