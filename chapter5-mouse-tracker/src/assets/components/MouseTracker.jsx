import React from 'react'
import { useState } from 'react';

const MouseTracker = () => {

    const [postion, setPosition] = useState({ x: 0, y: 0 });
    const [clickedPositions, setClickedPositions] = useState([{ x: 10, y: 10 }]);

    const getOffsetInfo = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        return { offsetX, offsetY };
    }
    return (
        <>
            <div className='trackerInfo'>현재 위치 x : {postion.x}, y : {postion.y}</div>
            <div className='trackerArea' onMouseMove={(e) => {
                const { offsetX, offsetY } = getOffsetInfo(e);

                setPosition({
                    x: offsetX,
                    y: offsetY
                });
            }}
                onClick={(e) => {
                    setClickedPositions([...clickedPositions, { x: postion.x, y: postion.y }]);
                }}

            >
                마우스 트래킹 하는 공간
                <div
                    className='trackerBall'
                    style={{
                        top: postion.y,
                        left: postion.x
                    }}>
                </div>
                {clickedPositions.map((clickedPosition, index) => {
                    return (
                        <div
                            key={index}
                            className='clickedBall'
                            style={{
                                top: clickedPosition.y,
                                left: clickedPosition.x
                            }}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default MouseTracker