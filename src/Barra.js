import React , { useState , useEffect } from 'react' ;    
import { Bar } from '@ant-design/charts';
import axios from 'axios'

export default function Barra() {


    const [data, setData] = useState([])
    
    const url = 'https://3.138.183.233/productividad'

    const peticionGet = async () => {
        await axios.get(url)
            .then(response => {
                setData(response.data)
            }).catch(error => { console.log(error) })
    }

    useEffect(() => {
        peticionGet()
    }, [])


    const config = {
        data: data,
        xField: 'cantidad',
        yField: 'nombre',
        seriesField: 'nombre',
        legend: { position: 'top-left' }
    };
    return <Bar {...config} />;
}