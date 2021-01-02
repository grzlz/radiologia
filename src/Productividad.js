import React from 'react'

import { Statistic, Row, Col  } from 'antd';

export default function Productividad() {
    return (
        <div>
              <div style={{ background: '#fff', padding:24, minHeight:580}}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic title="Productividad" value={123}/>
                    <h1>Aquí desplegaremos analítica sobre el desempeño de los técnicos.</h1>
                  </Col>
                  <Col span={12}>
                    <Statistic title="Contenido 2" value={93} suffix="/ 100" />
                  </Col>
              </Row>
              </div>
        </div>
    )
}
