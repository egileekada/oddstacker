import React from 'react'
import GameDetails from '../../components/DashboardComponent/GameDetails' 
import SelectedGame from '../../components/DashboardComponent/SelectedGame'
import DashboardContainer from '../../components/DashboardContainer' 

export default function Index() {
    return (
        <DashboardContainer > 
            <div className=' flex flex-1 h-full px-5 overflow-y-auto  ' >
                <GameDetails />
            </div>
            <div className=' flex flex-1 h-full overflow-y-auto  ' >
                <SelectedGame />
            </div> 
        </DashboardContainer>
    )
} 