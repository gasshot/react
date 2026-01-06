import React from 'react'
import { useEffect } from 'react'



const Flag = () => {

    useEffect(() => {
        console.log('Flag컴포넌트 마운트')
    }, [])

    useEffect(() => {
        return () => {
            console.log('Flag컴포넌트 언마운트')
        }
    }, [])

    return (
        <div>Flag</div>
    )
}

export default Flag