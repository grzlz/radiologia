import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Form, Input } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import axios from 'axios'

const { Item } = Form

export default function Admin() {

    const [data, setData] = useState([])
    const [modalInsertar, setModalInsertar] = useState(false)
    const [tecnico, setTecnico] = useState({
        id: '',
        nombre: '',
        servicio: '',
        cantidad: ''
    })

    const cambioEnInputModal = e => {
        const{name, value} = e.target
        setTecnico({...tecnico, 
            [name]: value})
    }

    const abrirCerrarModalInsertar = () => {
        setModalInsertar(!modalInsertar)
    }

    const url = 'http://3.138.183.233/productividad'

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre'
        },
        {
            title: 'Servicio',
            dataIndex: 'servicio',
            key: 'servicio'
        },
        {
            title: 'Cantidad',
            dataIndex: 'cantidad',
            key: 'cantidad'
        },

        {
            title: 'Acciones',
            dataIndex: 'acciones',
            key: 'acciones',
            render: fila => (
                <>
                    <Button type='primary'>Editar</Button> {"   "}
                    <Button type='danger'>Eliminar</Button>
                </>
            )
        }
    ]

    const peticionGet = async () => {
        await axios.get(url)
            .then(response => {
                setData(response.data)
            }).catch(error => { console.log(error) })
    }


    const peticionPost = async () => {
        await axios.post('http://3.138.183.233/post', tecnico)
            .then(response => {
                setData(response.data)
                abrirCerrarModalInsertar()
            }).catch(error => { console.log(error) })
    }

    useEffect(() => {
        peticionGet()
    }, [])


    return (
        <div className='App'>
            <Table columns={columns} dataSource={data} />
            <Button type='primary' className='botonInsertar' style={{ textAlign: 'center' }} onClick={abrirCerrarModalInsertar}>Agregar técnico</Button>

            <Modal visible={modalInsertar} title='Agregar técnico'
                destroyOnClose={true} onCancel={abrirCerrarModalInsertar}
                centered
                footer={[<Button onClick={abrirCerrarModalInsertar}>Cancelar</Button>,<Button className='botonInsertar' onClick={peticionPost}>Agregar</Button>]}>

                    <Form>
                        <Item label='ID'>
                            <Input name='id' onChange={cambioEnInputModal}/>
                        </Item>

                        <Item label='Nombre'>
                            <Input name='nombre'onChange={cambioEnInputModal}/>
                        </Item>
                        <Item label='Servicio'>
                            <Input name='servicio'onChange={cambioEnInputModal}/>
                        </Item>
                        <Item label='Cantidad'>
                            <Input name='cantidad'onChange={cambioEnInputModal}/>
                        </Item>

                    </Form>


            </Modal>
        </div>
    )
}
