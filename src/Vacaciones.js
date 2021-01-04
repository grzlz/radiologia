import React from 'react'
import 'antd/dist/antd.css'
import { Line } from '@ant-design/charts'

export default function Vacaciones() {

    const data = [
        { temporada: '2004', goles: 4 },
        { temporada: '2005', goles: 10 },
        { temporada: '2006', goles: 18 },
        { temporada: '2007', goles: 17 },
        { temporada: '2008', goles: 42 },
        { temporada: '2009', goles: 49 },
        { temporada: '2010', goles: 55 },
        { temporada: '2011', goles: 75 },
        { temporada: '2012', goles: 65 },
        { temporada: '2013', goles: 46 },
        { temporada: '2014', goles: 59 },
        { temporada: '2015', goles: 42 },
        { temporada: '2016', goles: 57 },
        { temporada: '2017', goles: 47 },
        { temporada: '2018', goles: 52 },
        { temporada: '2019', goles: 31 }
    ]

    const configuracion = {
        data,
        xField: 'temporada',
        yField: 'goles',
        color: '#2593fc',
        point: {
            visible: true,
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2
            }
        }

    }

    return (
        <div>
            <Line {...configuracion} />

        </div>
    )
}
