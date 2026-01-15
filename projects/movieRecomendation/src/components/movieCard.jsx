import React from 'react'



function movieCard({imgPath,relDate,title}) {
  return (
    <div className="movie-cont  bg-[#262626] rounded-[10px] p-0">
        <img src={imgPath}  className="poster object-cover h-[80%] w-[100%]  rounded-[10px]"/>
        <div className='info p-4'>
            <h5 className="self-start text-white ">{title}</h5>
            <h6 className="rel-date text-[#717171] mb-1">{relDate}</h6>
        </div>


    </div>
  )
}

export default movieCard