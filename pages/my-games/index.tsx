import Head from 'next/head'
import React from 'react'
import GameDetails from '../../components/MyGamesComponent/MyGamesInfo'
import MenuBar from '../../components/DashboardComponent/MenuBar' 
import Navbar from '../../components/Navbar'
import SelectedGame from '../../components/MyGamesComponent/SelectedGame'
import ParticipationModal from '../../components/MyGamesComponent/ParticipationModal'
import DashboardContainer from '../../components/DashboardContainer'

export default function Index() {

    const [isShown, setIsShown] = React.useState(false)
    const [tab, setTab] = React.useState(false)

    return ( 
        <DashboardContainer >  
            <div className={isShown ? ' lg:flex hidden flex-1 h-full lg:px-5 overflow-y-auto  ': ' flex flex-1 h-full lg:px-5 overflow-y-auto  '} >
                <GameDetails open={setIsShown}  />
            </div>
            <div className={isShown ? ' flex flex-1 h-full overflow-y-auto  ': ' lg:flex hidden flex-1 h-full overflow-y-auto  '} >
                <SelectedGame show={isShown} tab={tab} setTab={setTab} />
                <ParticipationModal show={tab} hide={setTab} />
            </div> 
        </DashboardContainer> 
    )
} 