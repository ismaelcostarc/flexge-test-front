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
  InputNumber,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ProductSelect } from "./components/ProductSelect";
import { useState, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";

const { Text } = Typography;

export const ContractsProducts = ({ setProductList, clearForm }) => {
  const [products, setProducts] = useState([]);
  const [form] = useForm();
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    form.resetFields();
    setProducts([]);
  }, [clearForm]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const addProduct = (values) => {
    const newProduct = values.beginningOfTerm
      ? {
          ...values,
          beginningOfTerm: values.beginningOfTerm.toString(),
        }
      : values;

    setProducts([...products, newProduct]);
    setEnableButton(false);
    form.resetFields();
  };

  const dataSource = products.map((product, index) => {
    const data = {
      ...product,
      key: index,
    };

    if (product.beginningOfTerm) {
      const date = new Date(product.beginningOfTerm);
      return {
        ...data,
        beginningOfTerm:
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear(),
      };
    }

    return data;
  });

  const onValuesChange = (_, allValues) => {
    const enable =
      allValues.name ||
      allValues.amount ||
      allValues.finalUnitPrice ||
      allValues.installments ||
      allValues.paidInstallments ||
      allValues.beginningOfTerm;

    setEnableButton(enable);
  };

  const deleteProduct = (productToDeleteIndex) =>
    setProducts(products.filter((_, index) => index !== productToDeleteIndex));

  const columns = [
    { title: "Product", dataIndex: "name", key: "name" },
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
          <Button onClick={() => deleteProduct(index)} type="text">
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card title="Contract's Products">
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <Form
          layout="inline"
          onFinish={addProduct}
          form={form}
          onValuesChange={onValuesChange}
        >
          <Space direction="vertical" style={{ width: "100%" }} size="small">
            <Row gutter={24} style={{ width: "100%" }}>
              <Col span={6}>
                <Text>* Product</Text>
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
                  <InputNumber
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item name="finalUnitPrice">
                  <InputNumber
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item name="installments">
                  <InputNumber
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item name="paidInstallments">
                  <InputNumber
                    style={{
                      width: "100%",
                    }}
                  />
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
                  <Button block htmlType="submit" disabled={!enableButton}>
                    <PlusOutlined /> Add
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Space>
        </Form>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        ></Table>
      </Space>
    </Card>
  );
};
