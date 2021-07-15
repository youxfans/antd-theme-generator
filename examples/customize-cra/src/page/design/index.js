import { Layout, Card, Typography } from "antd";
import React from "react";

const { Content } = Layout;
const { Text } = Typography;

const DesignPage = () => {
  return (
    <Layout>
      <Content>
        <Card title="Font">
          <Text code>
            font-family: Helvetica, Arial, "PingFang SC", "Microsoft Yahei",
            Meiryo, sans-serif;
          </Text>
        </Card>
      </Content>
    </Layout>
  );
};

export default DesignPage;
