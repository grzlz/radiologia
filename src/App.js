import './App.css';
import { Layout, Typography, Menu } from 'antd';
import Content1 from './Content1'
import Content2 from './Content2'
import Vacaciones from './Vacaciones';
import Admin from './Admin'
import SubMenu from 'antd/lib/menu/SubMenu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;



function App() {
  return (
    <Router>
      <Layout>
        <Header style={{padding: 10}}>
          <Title style={{color:'white'}} level={3}>Radiología</Title>
        </Header>
        <Layout>
          
          <Sider>
            <Menu mode='inline' theme='dark'>
              <SubMenu title={ <span>Dashboard</span> }>
                  <Menu.Item key='dashboard'>
                    Operación diaria
                    <Link to='operacion' />
                  </Menu.Item>
                  <Menu.Item>
                    Productividad
                    <Link to='productividad' />
                  </Menu.Item>
              </SubMenu>
              <SubMenu title={ <span>Administrador</span>}>
                  <Menu.Item key='location1'>
                    Administrar técnico
                    <Link to='/admin' />
                  </Menu.Item>
                  <Menu.Item key='location2'>
                    Modificar vacaciones
                    <Link to='/vacaciones' />
                  </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout>
            <Content style={{ margin: '24px 16px', padding: 30, background: '#fff', minHeight: 450 }}>
            
                  <Route path='/operacion' component={Content1}/> 
                  <Route path='/productividad' component={Content2}/>
                  <Route path='/admin' component={Admin} />
                  <Route path='/vacaciones' component={Vacaciones} />

            </Content>
            <Footer style={{textAlign: 'center'}}>Product created by the army of two.</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
