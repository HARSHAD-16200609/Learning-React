import React, {useState} from 'react'



function MovieCard({ imgPath, relDate, title, onFav,heartDisplay }) {
    const [liked ,setLiked] = useState(false)

    return (
        <div className="movie-cont bg-[#262626] rounded-[10px] p-0 relative">

            <img
                src={imgPath}
                className="poster object-cover h-[80%] w-full rounded-[10px]"
                alt={title}
            />


            <svg
                className={`
                ${heartDisplay ? 
                    " absolute top-3 right-3 w-6 h-6 cursor-pointer transition " :
                    " absolute top-3 right-3 w-6 h-6 cursor-pointer transition hidden"}
 
  ${liked
                    ? "fill-red-700 stroke-red-700 scale-[1.2]"
                    : "stroke-white fill-none hover:fill-red-700 hover:stroke-red-700 hover:scale-[1.2]"
                }
`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"

                onClick={()=>{
                    setLiked(!liked)
                    if(!liked) {
                        onFav({

                            posterLink:imgPath,
                            releaseDate:relDate,
                            title:title
                        })
                    }
                }}

            >
                <path
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <div className="info p-4">
                <h5 className="text-white">{title}</h5>
                <h6 className="text-[#717171]">{relDate}</h6>
            </div>

        </div>
    );
}


export default MovieCard