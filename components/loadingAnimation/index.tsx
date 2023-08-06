import { Spinner } from "@chakra-ui/react"
import React from "react"

interface IProps { 
    children: React.ReactNode,
    loading: boolean,
    length: number
}

function LoadingAnimation(props: IProps) {

    let {
        children,
        loading,
        length
    } = props

    return (
        <>
            {!loading && (
                children
            )}
            {!loading && (
                <>
                    {length === 0 && (
                        <div className="  w-full py-4 text-black text-xl flex justify-center   " >
                            <p>No Records Found</p>
                        </div> 
                    )}
                </>
            )} 
            {loading && ( 
                <div className=" w-full py-8 text-2xl flex justify-center  " >
                    <Spinner size="xl" />
                </div>
            )}
        </>
    )
}

export default LoadingAnimation
