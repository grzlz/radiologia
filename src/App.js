import './App.css';
import { Layout, Typography, Menu, Breadcrumb, Statistic, Row, Col  } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{padding: 10}}>
          <Title style={{color:'white'}} level={3}>Radiología</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu mode='inline'>
              <SubMenu title={ <span>Dashboard</span> }>
                <Menu.Item key='dashboard'>Operación diaria</Menu.Item>
                <Menu.Item>Productividad</Menu.Item>
              </SubMenu>
              <SubMenu title={ <span>Administrador</span>}>
                  <Menu.Item key='location1'>Administrar técnico</Menu.Item>
                  <Menu.Item key='location2'>Modificar vacaciones</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px'}}>
              <Breadcrumb style={{ margin: '16px 0'}}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>  
              </Breadcrumb>
              <div style={{ background: '#fff', padding:24, minHeight:580}}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic title="Feedback" value={1128}/>
                  </Col>
                  <Col span={12}>
                    <Statistic title="Unmerged" value={93} suffix="/ 100" />
                  </Col>
              </Row>
              </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Product created by the army of two.</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
