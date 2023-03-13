import React from 'react'
import './Table.css'
import { AiOutlineSearch } from 'react-icons/ai';

function Table() {
  return (
    <div className='table_big_dev'>
        <div className='table_header'>
            <div className='table_title'>Top products</div>

            <div className='table_header_group'>
                <div className='search'>
                    <AiOutlineSearch/>
                    <input className='search_input' placeholder='search' type="text" />
                </div>

                <div className='duration'>
                    <select name="" className='duration_select'>
                        <option value="today" >today</option>
                        <option value="week" >This week</option>
                        <option value="month" >This month</option>
                        <option value="year" >This year</option>
                    </select>
                </div>
            </div>
        </div>
        <table>
            <tr>
                <th>Product name</th>
                <th>Order ID</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Sales</th>
            </tr>
            <tr>
                <td>Nothing at the time</td>
                <td>#0</td>
                <td>$0</td>
                <td>0</td>
                <td>$0</td>
            </tr>
         
           
        </table>
    </div>
  )
}

export default Table