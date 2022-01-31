/* eslint-disable max-len */
import React, { cloneElement } from 'react';
import {
  Button, Row, Col, Card, Typography,
} from 'antd';
import { Link } from 'react-router-dom';
import MainForm from '../MainForm';
import CarouselComponent from '../Carousel';
import TicketList from '../TicketList';
import './StartComponent.css';

const { Title } = Typography;

function StartComponent() {
  return (
    <>
      <Row justify="center" align="middle">
        <Col xl={{ span: 6 }} xxl={{ span: 6 }}>
          <img src="bg6.png" className="main-bg-left" alt="bg" />
        </Col>
        <Col style={{ textAlign: 'center' }} xl={{ span: 8 }} xxl={{ span: 6 }}>
          <Title level={1} className="title-font-playlist top" style={{ color: '#004aad', fontSize: 70, margin: 0 }}>EasyTrip</Title>
          <Title level={2} className="title-fint-adler" style={{ color: '#13c2c2', marginBottom: 50, paddingTop: 0 }}>ПУТЕШЕСТВУЙТЕ С НАМИ ЛЕГКО!</Title>
        </Col>
        <Col xl={{ span: 6 }} xxl={{ span: 6 }}>
          <img src="bg7.png" className="main-bg-right" alt="bg" />
        </Col>
      </Row>
      <MainForm />
      <Row justify="center">
        <Title className="title-fint-adler" level={2} style={{ color: '#004aad', marginBottom: 30 }}> Популярные направления</Title>
      </Row>

      <CarouselComponent className="auto" />

      {/* <Row justify="center" align="bottom" style={{ margin: '50px' }}>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="map" src="/map2.png" style={{ width: '200px' }} />}
          >
            <Link to="/map" key="map">
              <Button size="large" type="primary">Карта низких цен</Button>
            </Link>
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="excursions" src="/car.png" style={{ width: '200px' }} />}
          >
            <Link to="/excursions" key="excursions">
              <Button size="large" type="primary">Экскурсии города</Button>
            </Link>
          </Card>
        </Col>
      </Row> */}
      {/* <TicketList /> */}
    </>
  );
}

export default StartComponent;
