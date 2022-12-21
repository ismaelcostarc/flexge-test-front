import { Row, Button, Form, Card, Table, Input, Space, Col } from "antd";
import { BaseLayout } from "../../components/layout/BaseLayout";
import { PlusOutlined, HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const QueryPage = () => {
  // Redux Saga
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log(form);
  };

  return (
    <>
      <BaseLayout
        breadcrumbItems={[
          <span>
            <HomeOutlined /> Home
          </span>,
          "Contracts",
        ]}
      >
        <Card
          title={
            <Row justify="space-between" align="middle">
              <div>Contracts</div>
              <Link to="/contract">
                <Button>
                  <PlusOutlined /> New Contract
                </Button>
              </Link>
            </Row>
          }
        >
          <Space direction="vertical" style={{ width: "100%" }} size="large">
            <Form
              layout="inline"
              form={form}
              onFinish={onFinish}
              style={{ justifyContent: "space-between" }}
            >
              <Space direction="vertical" style={{ width: "100%" }} size="small">
                <Row style={{ width: "100%" }}>
                  <Col span="4">Document Number</Col>
                  <Col span="8">Social Reason</Col>
                  <Col span="8">Company</Col>
                  <Col span="4"></Col>
                </Row>
                <Row style={{ width: "100%" }}>
                  <Col span="4">
                    <Form.Item name="documentNumber" colon={false}>
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span="8">
                    <Form.Item name="socialReason">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span="8">
                    <Form.Item name="company">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span="4">
                    <Button htmlType="submit" disabled>
                      <SearchOutlined /> Search
                    </Button>
                  </Col>
                </Row>
              </Space>
            </Form>

            <Table></Table>
          </Space>
        </Card>
      </BaseLayout>
    </>
  );
};
