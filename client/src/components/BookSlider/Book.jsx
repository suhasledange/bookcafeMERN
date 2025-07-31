import React from 'react'

const Book = ({title,image}) => {
  return (
      <div className="overflow-hidden w-44 bg-white mx-auto py-3 flex flex-col items-center justify-center">
        <div className=" w-44 h-48 drop-shadow-xl transform duration-150 hover:scale-105 mx-auto">
            <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover mb-2 rounded"
                />
        </div>

        <div className=" text-black/[0.9] flex items-center justify-center flex-col">
          <h2 className="mt-3 text-sm font-medium">
            {/* {bookName?.length > 14 ? bookName?.slice(0, 15) + "..." : bookName} */}
            title
             </h2>
          <p className="text-center mb-1 text-gray-700">
            {/* {author?.slice(0, 16)} */}
                author
          </p>
        </div>

      <div className="flex justify-center items-center text-black/[0.7] mt-2 mb-4 w-full">
        <div className="flex items-center justify-evenly w-full">
          <p className="text-lg font-semibold ">
            &#8377;50
          </p>
        </div>
      </div>

      <button
          className={`hover:bg-black/[0.8] duration-150 bg-black text-white p-[0.3rem] px-5 tracking-wider cursor-pointer`}
        >
         Add To Cart
        </button>
    </div>
  )
}

export default Book
