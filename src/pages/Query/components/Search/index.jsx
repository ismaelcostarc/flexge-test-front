import { Row, Button, Form, Input, Space, Col } from "antd";
import { useForm } from "antd/es/form/Form";
import { SearchOutlined } from "@ant-design/icons";

export const Search = () => {
  const [form] = useForm();

  const onFinish = (value) => {
    console.log(form);
  };

  return (
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
  );
};
