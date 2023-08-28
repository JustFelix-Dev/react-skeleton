import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

const MainPage = () => {
    const [loading,setLoading] = useState(true);
    const [ title,setTitle ] = useState("");

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
            setTitle('Felix Owolabi')
        },5000)
    })
  return (
    <>
    <div>
      Hello World!
      <p>{title || <Skeleton/>}</p>
    </div>
    <hr />
    <div className='container' style={{ marginTop:"2rem",display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center'}}>

    { loading ? <Skeleton  style={{width:'300px',height:'150px'}}/> : (<>
    <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     <div style={{width:'300px',height:'150px',borderRadius:'6px',background:'#333'}}></div>
     </>)
     }
 </div>
 </>
  )
}

export default MainPage
