import React from 'react'



function movieCard({imgPath,relDate,name}) {
  return (
    <div className="movie-cont h-[60%] w-[20%]  bg-[#262626] rounded-[10px] p-0">
        <img src={imgPath}  className="poster object-cover h-[80%] w-[100%]bg-blue-700 rounded-[10px]"/>
        <div className='info p-4'>
            <h5 className="self-start text-white mb-2">{name}</h5>
            <h6 className="rel-date text-[#717171]">{relDate}</h6>
        </div>


    </div>
  )
}

export default movieCard