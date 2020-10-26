import React, { useState } from 'react';
import List from './List';
import './ToDoList.css';

const ToDoList = () => {

    const [inputItem, setInputItem] = useState('')
    const inputItemEvent = (event) => {
        setInputItem(event.target.value)
    }

    const [item, setItem] = useState([]);
    const addToList = () => {
        setItem((oldItem) => {
            return [...oldItem, inputItem]
        });
        setInputItem('')
    };

    const deleteItem = (id) =>{
        setItem((oldItem)=>{
            return oldItem.filter((arrElement, index)=>{
                return index !== id
            })
        });
    };

    return (
        <div>
            <input type='text' placeholder="Add an item" value={inputItem} onChange={inputItemEvent} />
            <button className="add-btn" onClick={addToList}>+</button>
            <ol>
                {
                    item.map((itemValue, index) => {
                        return (
                            <List text={itemValue} key={index} id={index} onDelete={deleteItem} />
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default ToDoList
