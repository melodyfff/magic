import React, {useEffect,useState} from 'react'
import axios from 'axios'


const MockData = () => {
   const [data,setData] = useState({list:[]})

   useEffect(() => {
    fetchData()   
    fetchData2()   
    },[])


    const fetchData = async () => {
        const res = await axios('/mock/usermsg')
        console.log(res.data)
        setData(res.data.list)
    }

    const fetchData2 = async () => {
        const res = await axios('/api/v1/dataSourcesers')
        console.log(res)
    }
 
    // 转换为Array，为了遍历ul li
    let arr = Array.from(data)
    const list = arr.map((item,i)=>{
            return (<ul key={i}><li key={i}>{item.name}:{item.age}</li></ul>)
            })
    console.log(list)
        
    return (
        <>
        <h1>模拟请求mockjs</h1>
        {list}
        </>
    )
}
export default MockData