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

    return ( 
        <DashboardContainer >  
            <div className=' flex flex-1 h-full px-5 overflow-y-auto  ' >
                <GameDetails />
            </div>
            <div className=' flex flex-1 h-full overflow-y-hidden bg-[#0F1419] rounded-lg ' >
                <SelectedGame show={isShown} />
                <ParticipationModal />
            </div>
        </DashboardContainer> 
    )
} 