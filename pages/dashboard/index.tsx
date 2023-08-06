import React from 'react'
import GameDetails from '../../components/GameDetails' 
import SelectedGame from '../../components/DashboardComponent/SelectedGame'
import DashboardContainer from '../../components/DashboardContainer' 
import { IUser, UserContext } from '../../context'
import { useSelector } from 'react-redux'

export default function Index() {

    // const [isShown, setIsShown] = React.useState(false)


    const data = useSelector((state: any) => state?.gamedetails?.data)  
    const userContext: IUser = React.useContext(UserContext);  
    
    return (
        <DashboardContainer >   
            <div className={data?.open ? ' lg:flex hidden flex-1 h-full lg:px-5 overflow-y-auto  ': ' flex flex-1 h-full lg:px-5 overflow-y-auto  '} >
                <GameDetails/>
            </div>
            <div className={data?.open ? ' flex flex-1 h-full overflow-y-auto  ': ' lg:flex hidden flex-1 h-full overflow-y-auto  '} >
                <SelectedGame />
            </div>  
        </DashboardContainer>
    )
} 