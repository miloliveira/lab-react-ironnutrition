import React from 'react'
import { useState } from 'react'
import { Divider, Input } from 'antd';

function Search(props) {

    const {foodSearch}=props
    const [search, setSearch] = useState("")


const handleSearch = (e) =>{
    setSearch(e.target.value)
    foodSearch(e.target.value)
}


  return (
<>


<Divider>Search</Divider>


<Input value={search} type="text" onChange={handleSearch} style={{ width: 230, height: 50 }} />
</>


  )
}

export default Search