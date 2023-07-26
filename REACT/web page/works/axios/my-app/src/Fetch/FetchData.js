import React from 'react'
import axios from 'axios'
import './tabel.css'

import { useEffect,useState } from 'react'
export const FetchData = () => {
    const[data,setData]=useState([])
    const[searchData,setSearchData]=useState('')
    useEffect(()=>{
        axios.get('https://api.github.com/users')
        .then(res=>setData(res.data))
    },[])
    
    const displayDatas=data.filter((val,index)=>{
        return searchData===''?val&&index<5:val.id.toString().match(searchData)||val.avatar_url.toLowerCase().includes(searchData);
      })
  return (
    <div class="tabel">
        <input type="text" id="myInput"  placeholder="Search for name.." onChange={(e)=>setSearchData(e.target.value)} value={searchData}></input>
        <table class="tabel1">
            <thead>
                <tr>
                    <th>Login</th>
                    <th>ID</th>
                    <th>Node_id</th>
                    <th>avatar_url</th>
                    <th>html_url</th>
                </tr>
            </thead>
            <tbody class='border'>
                {
                   displayDatas.map((user,index)=>{
                        return<tr key={index}>
                            <td>{user.login}</td>
                            <td>{user.id}</td>
                            <td>{user.node_id}</td>
                            <td>{user.avatar_url}</td>
                            <td>{user.html_url}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
