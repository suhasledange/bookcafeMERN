import React from 'react'

const HomeSliderBlock = ({image,title,description}) => {
  return (
         <div className="flex items-center md:justify-evenly w-full mx-auto ">
        <div className="text-left">
            <h1 className="font-bold md:text-5xl text-3xl w-[60%]">{title}</h1>
            {/* <h1 className="font-bold md:text-5xl text-3xl mb-3">Rent Read Repeat!</h1> */}
            <p className="text-gray-700 md:text-md text-md">{description}</p>
            {/* <Link  href={` ${status ? '/book' : '/signup'}  `}>
            <Button className="mt-3" text={` ${status ? 'Go To Store' : 'Sign Up Now'}  `} />
            </Link>  */}
          </div>
          <div className=" space-y-4 text-md text-left">
             
          <div className="md:block hidden w-72 h-72 ">
            <img src={image} style={{
              width: '100%',
              objectFit: 'contain',
              height: '100%',
            }} alt='X' width={500} height={500} />
          </div>
          </div>
        </div>
  )
}

export default HomeSliderBlock
