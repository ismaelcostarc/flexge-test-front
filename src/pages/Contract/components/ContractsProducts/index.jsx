import {
  Row,
  Button,
  Form,
  Card,
  Table,
  Input,
  Space,
  Col,
  DatePicker,
  Typography,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ProductSelect } from "./components/ProductSelect";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";

const { Text } = Typography;

export const ContractsProducts = () => {
  const [products, setProducts] = useState([]);
  const [form] = useForm();

  const addProduct = (values) => {
    const newProduct = values.beginningOfTerm
      ? {
          ...values,
          beginningOfTerm: new Date(
            values.beginningOfTerm.format("YYYY-MM-DD")
          ),
          key: products.length,
        }
      : {
          ...values,
          key: products.length,
        };

    setProducts([...products, newProduct]);
    form.resetFields();
  };

  const columns = [
    { title: "Product", dataIndex: "product", key: "product" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    {
      title: "Final Unit Price",
      dataIndex: "finalUnitPrice",
      key: "finalUnitPrice",
    },
    { title: "Installments", dataIndex: "installments", key: "installments" },
    {
      title: "Paid Installments",
      dataIndex: "paidInstallments",
      key: "paidInstallments",
    },
    {
      title: "Beginning Of Term",
      dataIndex: "beginningOfTerm",
      key: "beginningOfTerm",
    },
    {
      title: "Actions",
      key: "finalUnitPrice",
      width: "10%",
      render: (_, record, index) => (
        <Space size="middle">
          <Button onClick={() => {}} type="text">
            <EditOutlined />
          </Button>
          <Button onClick={() => {}} type="text">
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card title="Contract's Products">
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <Form layout="inline" onFinish={addProduct} form={form}>
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
                <ProductSelect />
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
                  <DatePicker
                    initialValues={dayjs("01/01/2015", "DD/MM/YYYY")}
                    format={["DD/MM/YYYY", "DD/MM/YY"]}
                  />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item>
                  <Button block htmlType="submit">
                    <PlusOutlined /> Add
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Space>
        </Form>
        <Table columns={columns} dataSource={products}></Table>
      </Space>
    </Card>
  );
};
