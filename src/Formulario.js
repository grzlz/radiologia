import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import 'moment/locale/es'
import locale from 'antd/es/date-picker/locale/es_ES'

const { Item } = Form
const { Password } = Input

export default function Formulario() {

    const formSuccess = (datos) => {
        console.log(datos)
    }

    const formFailed = (error) => {
        console.log('Error al enviar formulario', error)
    }

    return (
        <div className='containerPrincipal'>
            <div className='containerSecundario'>
                <Form name='formulario' initialValues={{recordar: true}} onFinish={formSuccess} onFinishFailed={formFailed}>
                    <Item label='Usuario' name='username' rules={[{
                        required: true,
                        message: 'Nombre de usuario es un campo obligatorio'
                    }]}>
                        <Input />
                    </Item>
                    <Item label='Contraseña' name='password' rules={[{
                        required: true,
                        message: 'Contraseña es un campo obligatorio'
                    }]}>
                        <Password />
                    </Item>

                    <Item name='recordar' valuePropName='checked'>
                        <Checkbox>Recordar usuario</Checkbox>
                    </Item>

                    <Item>
                        <Button type='primary' htmlType='submit'>Iniciar sesión</Button>
                    </Item>
                </Form>
            </div>

        </div>
    )
}
