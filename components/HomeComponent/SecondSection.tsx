import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import FilesOne from "../../lottie-files/Mobile Home.json"
import FilesTwo from "../../lottie-files/Resulted Game.json"
import FilesThree from "../../lottie-files/Stack Page.json"
import FilesFour from "../../lottie-files/Leaderboard.json"

export default function SecondSection() {

    const [tab, setTab] = React.useState(1)

    return (
        <div className=' w-full px-6 flex flex-col items-center py-14 bg-[#000000] relative z-10  ' >   
            <p className=' text-[#00D1FF] text-2xl text-center font-Poppins-Bold ' >How to play</p>
            <div className=' flex items-center lg:mb-12 my-5 relative z-10' >
                {tab !== 1 ? 
                    <button onClick={()=> setTab((prev) => prev-1)} className=' lg:block hidden font-Poppins-Bold w-[112px] rounded-3xl h-[45px] bg-[#00D1FF] ' >{"<< Step "+(tab-1)}</button>:
                    <div className=' w-[112px] bg-transparent lg:block hidden ' />
                }
                <div className=' w-full lg:w-[500px] bg-[#00D1FF] mx-4 font-Poppins-SemiBold text-lg text-[#0F1419] rounded-2xl py-4 px-6 ' >
                    {tab === 1 && (
                    <>
                        <p className=' text-center ' >Step{" "+tab}</p>
                        <div className=' flex my-[2px]' >
                        <div className=' w-fit mt-3 mr-3 ' > 
                            <div className=' w-[6px] h-[6px] rounded-full bg-[#0F1419] '  />
                        </div> 
                        <p className=' ' >Select a game</p>
                        </div>
                        <div className=' flex my-[2px]' >
                        <div className=' w-fit mt-3 mr-3 ' > 
                            <div className=' w-[6px] h-[6px] rounded-full bg-[#0F1419] '  />
                        </div> 
                        <p className=' ' >Every game has a prize money (Jackpot), number of participants, number of winners, and an entry fee</p>
                        </div>
                    </>
                    )}
                {tab === 2 && (
                  <>
                    <p className=' text-center ' >Step{" "+tab}</p>
                    <div className=' flex my-[2px]' >
                      <div className=' w-fit mt-3 mr-3 ' > 
                        <div className=' w-[6px] h-[6px] rounded-full bg-[#0F1419] '  />
                      </div> 
                      <p className=' ' >Every game has predictions in it</p>
                    </div>
                    <div className=' flex my-[2px]' >
                      <div className=' w-fit mt-3 mr-3 ' > 
                        <div className=' w-[6px] h-[6px] rounded-full bg-[#0F1419] '  />
                      </div> 
                      <p className=' ' >Assign points to all the  predictions in the game as you see fit</p>
                    </div>
                  </>
                )}
                {tab === 3 && (
                  <>
                    <p className=' text-center ' >Step{" "+tab}</p>
                    <div className=' flex my-[2px]' >
                      <div className=' w-fit mt-3 mr-3 ' > 
                        <div className=' w-[6px] h-[6px] rounded-full bg-[#0F1419] '  />
                      </div> 
                      <p className=' ' >Some predictions will <span className=' text-[#006635] ' >”happen”</span> some <span className=' text-[#CC0C0C] ' >”won’t happen”</span></p>
                    </div>
                    <div className=' flex my-[2px]' >
                      <div className=' w-[6px] h-[6px] mr-3 rounded-full bg-[#0F1419] '  />
                      <p className=' ' >Points you give to predictions that did “not happen” are <span className=' text-[#CC0C0C] ' >lost</span></p>
                    </div>
                    <div className=' flex my-[2px]' >
                      <div className=' w-[6px] h-[6px] mr-3 rounded-full bg-[#0F1419] '  />
                      <p className=' ' >Points you give to predictions that “happened” become your <span className=' text-[#006635] ' >score</span></p>
                    </div>
                  </>
                )}
                {tab === 4 && (
                  <>
                    <p className=' text-center ' >Step{" "+tab}</p>
                    <div className=' flex my-[2px]' >
                      <div className=' w-fit mt-3 mr-3 ' > 
                        <div className=' w-[6px] h-[6px] rounded-full bg-[#0F1419] '  />
                      </div> 
                      <p className=' ' >Every player is ranked according to their score</p>
                    </div>
                    <div className=' flex my-[2px]' >
                      <div className=' w-fit mt-3 mr-3 ' > 
                        <div className=' w-[6px] h-[6px] rounded-full bg-[#0F1419] '  />
                      </div> 
                      <p className=' ' >Players in the “winning positions” win their share of the Jackpote</p>
                    </div>
                  </>
                )}
              </div>
              {tab !== 4 ? 
                <button onClick={()=> setTab((prev) => prev+1)} className=' lg:block hidden font-Poppins-Bold w-[112px] rounded-3xl h-[45px] bg-[#00D1FF] ' >{" Step "+(tab+1)+" >>"}</button>:
                <div className='w-[112px] bg-transparent lg:block hidden ' />
              }
            </div> 
            <div className=" w-full flex mb-2 justify-center lg:hidden " >
              {tab !== 1 ? 
                <button onClick={()=> setTab((prev) => prev-1)} className=' mr-2 font-Poppins-Bold w-[112px] rounded-3xl h-[45px] bg-[#00D1FF] ' >{"<< Step "+(tab-1)}</button>:
                <div className='w-[112px] bg-transparent ' />
              }
              {tab !== 4 ? 
                <button onClick={()=> setTab((prev) => prev+1)} className=' ml-2 font-Poppins-Bold w-[112px] rounded-3xl h-[45px] bg-[#00D1FF] ' >{" Step "+(tab+1)+" >>"}</button>:
                <div className='w-[112px] bg-transparent ' />
              }
            </div>

          <img src="/innerH.png" alt="SideBar" className=' absolute lg:block hidden w-[100%] z-0 inset-auto ' />
          <img src="/innerHmobile.png" alt="SideBar" className=' absolute lg:hidden w-[100%] z-0 inset-auto ' />
            
            {tab === 1 && ( 
            <Player
                autoplay
                loop
                src={FilesOne} className=" w-full lg:w-[500px] h-[860px] " />  
            )}
            {tab === 2 && ( 
            <Player
                autoplay
                loop
                src={FilesThree} className=" w-full lg:w-[500px] h-[860px] " />  
            )}
            {tab === 3 && ( 
            <Player
                autoplay
                loop
                src={FilesTwo} className=" w-full lg:w-[500px] h-[860px] " />  
            )}
            {tab === 4 && ( 
            <Player
                autoplay
                loop
                src={FilesFour} className=" w-full lg:w-[500px] h-[860px] " />  
            )} 
        </div>
    )
} 