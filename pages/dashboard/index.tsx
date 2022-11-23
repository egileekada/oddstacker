import React from 'react'
import GameDetails from '../../components/GameDetails' 
import SelectedGame from '../../components/DashboardComponent/SelectedGame'
import DashboardContainer from '../../components/DashboardContainer' 
import { IUser, UserContext } from '../../context'

export default function Index() {

    // const [isShown, setIsShown] = React.useState(false)

    const userContext: IUser = React.useContext(UserContext);  
    
    return (
        <DashboardContainer >   
            <div className={userContext.details ? ' lg:flex hidden flex-1 h-full lg:px-5 overflow-y-auto  ': ' flex flex-1 h-full lg:px-5 overflow-y-auto  '} >
                <GameDetails open={userContext.setDetail} />
            </div>
            <div className={userContext.details ? ' flex flex-1 h-full overflow-y-auto  ': ' lg:flex hidden flex-1 h-full overflow-y-auto  '} >
                <SelectedGame show={userContext.details} />
            </div>  
        </DashboardContainer>
    )
} 