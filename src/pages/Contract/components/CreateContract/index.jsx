import {
  Row,
  Button,
  Form,
  Card,
  Input,
  Select,
  Col,
  DatePicker,
  Upload,
} from "antd";
import { UploadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CountrySelect } from "./components/CountrySelect";
import { StateSelect } from "./components/StateSelect";
import { CompanySelect } from "./components/CompanySelect";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";

export const CreateContract = () => {
  const [form] = useForm();
  const [stateDisabled, setStateDisabled] = useState(true);

  const onValuesChange = (value) => {
    if ("country" in value) {
      setStateDisabled(false);
    }
  };

  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Card
      title={
        <Row justify="space-between" align="middle">
          <div>Create Contract</div>
          <Link to="/query">
            <Button>
              <ArrowLeftOutlined /> Back
            </Button>
          </Link>
        </Row>
      }
    >
      <Form form={form} onValuesChange={onValuesChange}>
        <Row gutter={24}>
          <Col span={8}>
            <CountrySelect />
          </Col>
          <Col span={8}>
            <StateSelect disabled={stateDisabled} />
          </Col>
          <Col span={8}>
            <Form.Item label="City" name="city" colon={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="Document Number"
              name="documentNumber"
              colon={false}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item label="Social Reason" name="socialReason" colon={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Address" name="address" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="District" name="district" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Number" name="number" colon={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Zip code" name="zipCode" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Email" name="email" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Phone" name="phone" colon={false}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={6}>
            <Form.Item
              label="Contracts starts in"
              name="contractsStartsIn"
              colon={false}
            >
              <DatePicker
                initialValues={dayjs("01/01/2015", "DD/MM/YYYY")}
                format={["DD/MM/YYYY", "DD/MM/YY"]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Contracts Ends In"
              name="contractsEndsIn"
              colon={false}
            >
              <DatePicker
                initialValues={dayjs("01/01/2015", "DD/MM/YYYY")}
                format={["DD/MM/YYYY", "DD/MM/YY"]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Due day" name="dueDay" colon={false}>
              <Select></Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item label="Upload the contract" name="file" colon={false}>
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Select a File</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Select a company"
          name="company"
          colon={false}
          wrapperCol={{
            span: 8,
          }}
        >
          <CompanySelect />
        </Form.Item>
      </Form>
    </Card>
  );
};
