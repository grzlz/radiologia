import './App.css';
import React, { useState } from 'react'
import { Layout, Typography, Menu } from 'antd';
import Operacion from './Operacion'
import Productividad from './Productividad'
import Vacaciones from './Vacaciones';
import Admin from './Admin'
import Formulario from './Formulario'
import SubMenu from 'antd/lib/menu/SubMenu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ProjectOutlined, DashboardOutlined, UserOutlined, CalendarOutlined, BarChartOutlined, TeamOutlined, FileTextOutlined } from '@ant-design/icons'


const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;



function App() {

  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Router>
      <Layout>
        <Header style={{ padding: 10 }}>
          <Title style={{ color: 'white' }} level={3}>Radiología</Title>
        </Header>
        <Layout>

          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Menu mode='inline' theme='dark'>
              <SubMenu title={<span><BarChartOutlined /><span>Dashboard</span></span>}>
                <Menu.Item key='dashboard'>
                  <ProjectOutlined />
                    Operación diaria
                    <Link to='operacion' />
                </Menu.Item>
                <Menu.Item>
                  <DashboardOutlined />
                    Productividad
                    <Link to='productividad' />
                </Menu.Item>
              </SubMenu><SubMenu title={<span><TeamOutlined /><span>Administrador</span></span>}>
                <Menu.Item key='location1'>
                  <UserOutlined />
                    Administrar
                    <Link to='/admin' />
                </Menu.Item>
                <Menu.Item key='location2'>
                  <CalendarOutlined />
                    Vacaciones
                    <Link to='/vacaciones' />
                </Menu.Item>

                <Menu.Item>
                  <FileTextOutlined />
                    Formulario
                    <Link to='/formulario' />
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout>
            <Content style={{ margin: '24px 16px', padding: 30, background: '#fff', minHeight: 920 }}>

              <Route path='/operacion' component={Operacion} />
              <Route path='/productividad' component={Productividad} />
              <Route path='/admin' component={Admin} />
              <Route path='/vacaciones' component={Vacaciones} />
              <Route path='/formulario' component={Formulario} />

            </Content>
            <Footer style={{ textAlign: 'center' }}>Product created by the army of two.</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
