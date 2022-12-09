import React from 'react';
import { Layout, Button, Input, Form } from 'antd';

import styled from 'styled-components';

const { Header, Footer, Content } = Layout;

const HomePage = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const StyledDiv = styled.div`
  background-color: #0c2e4e;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1024%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M0%2c512.934C95.413%2c486.956%2c197.616%2c490.395%2c280.342%2c436.221C362.659%2c382.315%2c405.18%2c291.455%2c461.459%2c210.741C531.055%2c110.929%2c650.486%2c28.274%2c649.63%2c-93.403C648.772%2c-215.452%2c534.016%2c-301.318%2c457.19%2c-396.157C377.653%2c-494.343%2c311.645%2c-613.795%2c192.957%2c-657.152C71.808%2c-701.409%2c-65.902%2c-679.792%2c-185.231%2c-630.838C-298.045%2c-584.556%2c-365.526%2c-477.529%2c-452.704%2c-392.27C-548.952%2c-298.14%2c-693.909%2c-235.329%2c-723.849%2c-104.074C-754.003%2c28.121%2c-660.616%2c152.636%2c-605.23%2c276.399C-549.407%2c401.141%2c-526.543%2c571.508%2c-399.256%2c621.254C-268.165%2c672.487%2c-135.803%2c549.909%2c0%2c512.934' fill='%230b2239'%3e%3c/path%3e%3cpath d='M1920 1901.358C2075.594 1911.1509999999998 2221.376 1837.214 2354.707 1756.417 2490.872 1673.903 2651.516 1586.718 2692.915 1432.979 2733.978 1280.488 2609.782 1138.163 2561.697 987.738 2522.6530000000002 865.597 2497.751 744.973 2436.906 632.098 2361.038 491.35299999999995 2304.271 326.03599999999994 2163.819 249.62800000000004 2014.388 168.33500000000004 1829.713 168.93899999999996 1665.217 212.28700000000003 1498.231 256.29100000000005 1342.626 352.174 1242.0320000000002 492.53700000000003 1145.437 627.321 1125.348 799.909 1125.2469999999998 965.732 1125.156 1115.354 1171.048 1257.862 1241.4850000000001 1389.867 1308.609 1515.663 1405.2350000000001 1617.996 1519.092 1703.826 1640.513 1795.358 1768.244 1891.807 1920 1901.358' fill='%23113255'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1024'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  padding: 20px;
  height: 100vh;
`;

  return (
    <StyledDiv>
        <Layout>
        <Content>
            <Form
            form={form}
            name="home-page-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
            >
                <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter your email!' }]}
            >
                <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </Content>
        <Footer>Footer</Footer>
        </Layout>
    </StyledDiv>
    
  );
};

export default HomePage;
