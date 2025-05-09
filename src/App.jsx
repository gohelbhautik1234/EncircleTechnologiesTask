import { useState } from 'react'
import menu from "../public/menus.png";
import header from "../public/header.png";
import logo from "../public/logo.png";
import close from "../public/close.png";
import facebook from "../public/facebook.png";
import instagram from "../public/instagram.png";
import tranquil_luxury from "../public/tranquil_luxury.png";
import './App.css'

function App() {
  const [isShow, setisShow] = useState(false);

  return (
    <>
      <div className="relative">
        <img src={header} alt="img" className='w-full'/>
        <header className="flex flex-row-reverse inset-0 justify-between p-5 text-white z-10 mb-10 w-full h-20 invisible md:visible fixed font-poppins">
            <ul className="flex basis-30 gap-2">
                <li>
                  <ul className="flex basis-70">
                    <li className=" rounded-md px-5 py-2">STAY</li>
                    <li className=" rounded-md px-5 py-2">DINING</li>
                    <li className=" rounded-md px-5 py-2">EXPERIENCE</li>
                  </ul>
                </li>
                <li onClick={() => setisShow(!isShow)}>
                  {
                    isShow==false && (
                      <img src={menu} alt="img" className="mt-1"/>
                    )
                  }
                </li>
                <li className=" px-4 py-2 bg-black transition w-52 text-center">MAKE A BOOKING</li>
            </ul>
            <div className="flex basis-20 h-20"><img src={logo} /></div>
        </header>
        <div className="flex flex-row inset-0 justify-between p-5  text-white fixed z-10 mb-10 h-20 font-sans visible md:invisible">
            <button onClick={() => setisShow(!isShow)}>
                { isShow==false && ( <img src={menu} alt="img" /> ) } 
            </button>
            <ul className="flex basis-30 gap-10">
                <li className="border rounded-md px-4 py-1">MAKE A BOOKING</li>
                {/* <li><img src={telephone} alt="img" className="mt-1" />
                </li> */}
            </ul>
        </div>
        {isShow && (
            <>
                <header className="fixed z-10 bg-black bg-opacity-[.35] inset-0 mt-20">
                    <div className="grid grid-cols-1 justify-items-end p-5 bg-black bg-opacity-[.35] text-white text-left absolute mb-10 w-full ">
                        <div className='flex gap-10'>
                          <div onClick={() => setisShow(!isShow)}><img src={close} alt="img" className="mt-1" /></div>
                          <div className="border px-4 py-1 bg-white text-black font-medium">MAKE A BOOKING</div>
                        </div>
                        <div className="px-5 py-2">STAY</div>
                        <div className="px-5 py-2">DINING</div>
                        <div className="px-5 py-2">EXPERIENCE</div>
                        <div className="px-5 py-2">Our story</div>
                        <div className="px-5 py-2">wellness</div>
                        <div className="px-5 py-2">Location</div>
                        <hr className='text-gray-500 w-99'/>
                        <div className="px-5 py-2">OFFERS</div>
                        <div className="px-5 py-2">Boutique</div>
                        <div className="px-5 py-2">Community & sustainability</div>
                        <div className="px-5 py-2">Our blog</div>
                        <div className="px-5 py-2">Press</div>
                        <div className="px-5 py-2">Contact</div>

                        <div className="px-5 py-2">info@theretreatrwanda.com</div>
                        <div className="px-5 py-2">+000 000 0000</div>
                        <div className="flex gap-5 px-5 py-2">
                        <img src={facebook}  />
                        <img src={instagram} />
                        </div>
                    </div>
                </header>
            </>
        )}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:mx-20 mx-10 md:mt-20 mt-10 bg-gray-100">
        <div>
          <img src={tranquil_luxury} alt="image" width={550} height={450} />
        </div>
        <div className="grid grid-col-4 font-serif text-gray-500 md:mt-28 mt-15 md:p-0 px-5 md:gap-0 gap-10">
          <div className="text-3xl text-black">A tranquil luxury refuge</div>
          <div>
                Set in the vibrant heart of Kigali, this luxury boutique hotel and spa offers easy access to all that is happening in 
                this dynamic city. As one of Kigali’s top 5 star hotels, it offers the perfect combination of leafy tranquility, 
          </div>
          <div>      
                Rwandan flair, and contemporary buzz. Whether dining on exotic Rwandan cuisine at Fusion or Heaven restaurants, 
                soaking up the warmth of Kigali’s people and culture, your time here is sure to promise memories to last a lifetime.
          </div>
          <div className="group flex text-black text-xl h-10 place-content-around">
            <div className="basis-1/1">&#9674; EXPLORE OUR STORY</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:mx-20 mx-3 mt-20 gap-y-10" id="benefits">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-x-16 gap-y-5">
          <div className="md:col-span-12 text-4xl font-bold">Unwind in our exclusive stays</div>
          <div className="md:col-span-9">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit
            fringilla feugiat senectus in.
          </div>
          <div className="bg-white tracking-wider h-10 w-56 font-medium border-1 border-black text-center content-center md:col-span-3 md:place-self-end place-self-start hover:bg-black hover:text-white transition duration-500">EXPLORE ALL STAYS</div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 h-56">
          <div className="bg-[url(../public/luxury.png)] text-white pl-5 md:pt-90 pt-60 bg-no-repeat">
            <div className='hover:scale-105 duration-300 '>
              <div className='text-5xl'>luxury pool villa</div>
              <div className='text-xl'>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
              <div className='text-xl'>&#9674; Explore</div>
            </div>
          </div>
          <div className="bg-[url(../public/superior.png)] text-white pl-5 md:pt-90 pt-60 bg-no-repeat">
            <div className='hover:scale-105 duration-300 '>
              <div className='text-5xl'>Superior King suite</div>
              <div className='text-xl'>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
              <div className='text-xl'>&#9674; Explore</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
