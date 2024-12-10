import './App.css'; // if you want to add some global styles
import { Layout, Typography } from 'antd';
import TaskList from './components/TaskList';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529' }}>
        <Title className='py-5' level={3} style={{ color: 'white', textAlign: 'center' }}>
          Task Management App
        </Title>
      </Header>
      <Content style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
        <TaskList />
      </Content>
    </Layout>
  );
};

export default App;
