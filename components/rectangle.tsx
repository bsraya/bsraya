"use client";

import React, { useEffect, RefObject } from 'react'
import { select } from 'd3-selection'

export default function Rectangle() {
    const ref: RefObject<HTMLDivElement> = React.createRef()
    useEffect(() => {
        draw()
    })
    const draw = () => {
        select('svg').append('g').attr('transform', 'translate(250, 0)').append('rect').attr('width', 500).attr('height', 500).attr('fill', 'tomato')
    }
    return (
        <div className="Rectangle" ref={ref}>
            <svg width="500" height="500">
                <g transform="translate(0, 0)">
                    <rect width="500" height="500" fill="green" />
                </g>
            </svg>
        </div>
    )
}