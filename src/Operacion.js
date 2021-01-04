import React from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'
import Vacaciones from './Vacaciones'

export default function Operacion() {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={8}>
          <div><Vacaciones /></div>
        </Col>
        <Col xs={24} sm={12} md={4} lg={6}>
          <div style={{background:'green', textAlign:'center'}}>Columna2</div>
        </Col>
        <Col xs={24} sm={12} md={4} lg={6}>
          <div style={{background:'green', textAlign:'center'}}>Columna3</div>
        </Col>

        <Col xs={24} sm={12} md={4} lg={4}>
          <div style={{background:'green', textAlign:'center'}}>Columna4</div>
        </Col>
      </Row>

    </div>
  )
}
