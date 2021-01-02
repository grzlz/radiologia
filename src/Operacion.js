import React from 'react'

import { Statistic, Row, Col  } from 'antd';

export default function Operacion() {
    return (
        <div>
              <div style={{ background: '#fff', padding:24, minHeight:580}}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic title="Operación diaria" value={1128}/>
                    <h1>Aquí desplegaremos el estado de la operación para ese día.</h1>
                  </Col>
                  <Col span={12}>
                    <Statistic title="Contenido 1" value={93} suffix="/ 100" />
                  </Col>
              </Row>
              </div>

        </div>
    )
}
