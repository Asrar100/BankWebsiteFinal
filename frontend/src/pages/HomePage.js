import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, Row, Col, Image, Card, Button } from 'antd';
import './PageStyling/HomePage.css'; // Adjust as per updated styles
import Logo from './Images/Logo2.png';
import BankPhoto from './Images/BankPhoto.jpg';


const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

export default function EmployeeHome() {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#00823B' }}>
      {/* Header */}
      <Header style={{ backgroundColor: '#001529', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Image src={Logo} alt="Rupani Logo" preview={false} width={120} />
        <div className="buttons">
          <Button type="primary" onClick={() => navigate('employeePortal')} style={{ marginRight: '10px' }}>
            Employee Login Page
          </Button>
          <Button type="default" onClick={() => navigate('customerPortal')}>
            Customer Login Page
          </Button>
        </div>
      </Header>

      {/* Content */}
      <Content style={{ padding: '40px 20px', backgroundColor: '#fff' }}>
        <Row gutter={[24, 24]} justify="center">
          {/* Card 1 */}
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<Image src={BankPhoto} alt="Bank" preview={false} />}
              style={{ borderRadius: '8px', overflow: 'hidden' }}
            >
              <Title level={4}>About Us</Title>
              <Text>
              Founded in 2007, Rupani Foundation is registered as a not-for-profit organization under the section 42 of the Companies Ordinance, 1984 in Pakistan.
              The Foundation was the organization that preceded the Rupani Initiatives (RI). These initiatives are unique in scope and adapts an approach that combines and leverages the social and economic development to address the complex underlying aspects of development with the objectives of bringing a positive change in the lives of peoples in target geographies.
              Rupani Foundation responds more deliberately to specific population segments e.g., girls and women, youth, minorities, and the elderly.
              </Text>
             
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<Image src={BankPhoto} alt="Bank" preview={false} />}
              style={{ borderRadius: '8px', overflow: 'hidden' }}
            >
              <Title level={4}>Thematic Areas</Title>
              <Text>
              The core interventions of the Foundation revolve around early childhood development, education, economic inclusion, brain well-being, natural resources management, humanitarian assistance with 
              cross-cutting themes of gender, environment, civil society, and local governance.Since its inception, the Foundation has been implementing innovative programs to enhance skills and introduce value addition in local resources in partnership with local, national, and international agencies, and also promoting the holistic development of children (conception-8 years) by providing essential Early Childhood Development (ECD) and educational programs.
              </Text>
             
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<Image src={BankPhoto} alt="Bank" preview={false} />}
              style={{ borderRadius: '8px', overflow: 'hidden' }}
            >
              <Title level={4}>Geographic Areas of Focus</Title>
              <Text>
              Rupani Foundation Pakistan is working from the deserts of Sindh to the mountians of Gilgit-Baltistan. 
              Most of the activities are concentrated in Gilgit-Baltistan, Sindh and Punjab. The Foundation has increasingly expanded programs to include other remote and resource-poor areas of Pakistan.
              Our Core Office is based in Gilgit with two main offices in Islamabad and Karachi.
              The sister organisations of the Foundation also operate across Pakistan and other parts of the world by focusing on different innovative programe in different thematic areas.
              </Text>
             
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: 'center', backgroundColor: '#00823B', color: '#fff', padding: '20px' }}>
        <Title level={5} style={{ color: '#fff', marginBottom: '10px' }}>
          RUPANI FUNDATION
        </Title>
        <Text style={{ display: 'block', marginBottom: '5px' }}>
          <b>Address:</b> Kabul Afghanistan 
        </Text>
        <Text style={{ display: 'block', marginBottom: '5px' }}>
          <b>Email:</b> info@rupanifoundation.org
        </Text>
        <Text style={{ display: 'block', marginBottom: '5px' }}>
          <b>Tel:</b> +92-5811 459709
        </Text>
       
      </Footer>
    </Layout>
  );
}
