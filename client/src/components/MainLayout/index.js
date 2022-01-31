import {
  Layout, Button, Row, Col, Image,
} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CarouselComponent from '../Carousel';
import TicketList from '../TicketList';

import Navigation from '../Navigation';
import { useThemeContext } from '../../context/themeContext';
import './MainLayout.css';

const { Header, Footer, Content } = Layout;

export default function MainLayout() {
  const { auth } = useSelector((state) => state.user.data);
  const { theme } = useThemeContext();
  return (
    <Layout className={`main-layout ${theme}`}>
      <Header className={`${theme}`}>
        <div>
          <img src="/mainlogo.png" alt="logo" />
          {' '}
        </div>
        <Navigation />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer className={`${theme}`}>
        <GlobalOutlined />
        {' '}
        {' '}
        2022 EasyTrip — путешествуйте с нами легко!
      </Footer>
    </Layout>
  );
}
