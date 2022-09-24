import React from 'react'
import { useState } from 'react';
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items,setItems] = useState([]);
    const addToList = item => {
        console.log(item);
        const itemsCopy = [...items];
        itemsCopy.push(item);
        setItems(itemsCopy);
    };
  return (
    <div>
        <ShippingForm addToListCallback = {(value) => addToList(value)} />
        <table>
                    <th>Title</th>
                    <th>Weight</th>
                    <th>Color</th>
                    <th>Place</th>
            
            <tbody>
                {
                    items.map(item => {
                        return (
                            <tr key={item.title}>
                            <td>{item.Title}</td>
                            <td>{item.Weight}</td>
                            <td>
                                <div style={{backgroundColor:item.Color,width :"90px",height:"30px"}}></div>
                            </td>
                        

                        <td>{item.Place}</td>

                        </tr>
                        )
                    })
        }
  
            </tbody>
        </table>
    </div>
  )
    }


export default ShippingList