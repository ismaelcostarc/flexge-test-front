import {
  Row,
  Button,
  Form,
  Card,
  Table,
  Input,
  Select,
  Space,
  Col,
  DatePicker,
  Typography,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const ContractsProducts = () => {
  return (
    <>
      <Card title="Contract's Products">
        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          <Form layout="inline">
            <Space direction="vertical" style={{ width: "100%" }} size="small">
              <Row gutter={24} style={{ width: "100%" }}>
                <Col span={6}>
                  <Text>Product</Text>
                </Col>
                <Col span={3}>
                  <Text>Amount</Text>
                </Col>
                <Col span={3}>
                  <Text>Final Unit Price (R$)</Text>
                </Col>
                <Col span={3}>
                  <Text>Installments</Text>
                </Col>
                <Col span={3}>
                  <Text>Paid Installments</Text>
                </Col>
                <Col span={3}>
                  <Text>Beginning of Term</Text>
                </Col>
                <Col span={3}></Col>
              </Row>

              <Row gutter={24} style={{ width: "100%" }}>
                <Col span={6}>
                  <Form.Item name="product">
                    <Select></Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item name="amount">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item name="finalUnitPrice">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item name="installments">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item name="paidInstallments">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item name="beginningOfTerm">
                    <DatePicker />
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item>
                    <Button block>
                      <PlusOutlined /> Add
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Space>
          </Form>
          <Table></Table>
        </Space>
      </Card>
    </>
  );
};
