import React from 'react'
import './LinkCard.css'

function LinkCard({ url, slug, clicks, i }) {
    return (
        <div key={i} className='p-2 px-3 py-2 my-2 rounded-2 border main-container'>
            <p className='m-0 mt-1'><b>Url :</b><span style={{color:'#0066ff'}}> {url}</span></p>
            <p className='m-0 mt-1'><b>Short Url :</b> <span style={{color:'#0066ff'}}>{import.meta.env.VITE_BASE_URL}/api/{slug}</span> </p>
            <p className='m-0 text-end shodow m-0 p-1 py-0'><span>Clicks : {clicks}</span></p>
        </div>
        )
}

export default LinkCard