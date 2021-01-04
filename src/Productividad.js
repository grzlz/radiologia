import React, { useState } from 'react'
import { Modal, Button, Form, Input } from 'antd';
import 'antd/dist/antd.css'

export default function Productividad() {

  const [modal, setModal] = useState(false)
  const [futbolista, setFutbolista] = useState({ nombre: '', edad: '', posicion: '', club: '' })

  const abrirModal = () => {
    setModal(true)
  }

  const cerrarModal = () => {
    setModal(false)
  }

  const accion = () => {
    console.log(futbolista)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFutbolista({
      ...futbolista,
      [name]: value
    })
  }

  const layout = {
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 16
    }
  }



  return (
    <div style={{ textAlign: 'center' }}>

      <Button type='primary' onClick={abrirModal} style={{ textAlign: 'center' }}>Botón</Button>
      <Modal title='Futbolista' visible={modal} onCancel={cerrarModal} onOk={accion}
        footer={[<Button onClick={cerrarModal}>Cancelar</Button>, <Button type='primary' onClick={accion}>Enviar</Button>]}>
        <Form {...layout}>
          <Form.Item label='Nombre'>
            <Input name='nombre' onChange={handleChange} />
          </Form.Item>
          <Form.Item label='Edad'>
            <Input name='edad' onChange={handleChange} />
          </Form.Item>
          <Form.Item label='Posición'>
            <Input name='posicion' onChange={handleChange} />
          </Form.Item>
          <Form.Item label='Club'>
            <Input name='club' onChange={handleChange} />
          </Form.Item>
        </Form>
      </Modal>

    </div>

  )
}
