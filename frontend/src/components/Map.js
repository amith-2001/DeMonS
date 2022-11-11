import {useEffect, useState, useRef} from 'react';
export default function Map(props)
{
    const colors = {0:"greenyellow",1:"red",2:"gray"}

    return <div className='container forest justify-content-center d-flex'>
            <div className='container m-5 p-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-1'>
                    <span style={{backgroundColor:colors[props.status[0]]}} className="node"></span>
                </div>
            </div>
            <div className='row '>
                    <span className="space"></span>
            </div>
            <div className='row d-flex justify-content-around'>
                <div className='col-1'>
                    <span style={{backgroundColor:colors[props.status[1]]}} className="node"></span>
                </div>
                <div className='col-1'>
                    <span style={{backgroundColor:colors[props.status[2]]}} className="node"></span>
                </div>
            </div>
            </div>
    </div>
}