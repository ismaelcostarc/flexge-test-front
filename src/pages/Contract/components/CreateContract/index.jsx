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
  InputNumber,
} from "antd";
import { UploadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CountrySelect } from "./components/CountrySelect";
import { StateSelect } from "./components/StateSelect";
import { CompanySelect } from "./components/CompanySelect";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";

export const CreateContract = ({ setData, clearForm }) => {
  const [form] = useForm();
  const [stateDisabled, setStateDisabled] = useState(true);
  const [countryId, setCountryId] = useState(null);

  const onValuesChange = (value, allValues) => {
    if ("country" in value) {
      setStateDisabled(false);
    }

    setData(allValues);
  };

  const dueDays = () => {
    const arr = [...Array(30).keys()];

    return arr.map((_, index) => ({
      label: index + 1,
      key: index + 1,
      value: index + 1,
    }));
  };

  useEffect(() => {
    form.resetFields();
  }, [clearForm]);

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
            <CountrySelect setCountryId={setCountryId} />
          </Col>
          <Col span={8}>
            <StateSelect disabled={stateDisabled} countryId={countryId} />
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
              label="* Document Number"
              name="documentNumber"
              colon={false}
            >
              <InputNumber
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item
              label="* Social Reason"
              name="socialReason"
              colon={false}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="* Address" name="address" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="* District" name="district" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="* Number" name="number" colon={false}>
              <InputNumber
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="* Zip code" name="zipCode" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="* Email" name="email" colon={false}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Phone" name="phone" colon={false}>
              <InputNumber
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={6}>
            <Form.Item
              label="* Contracts starts in"
              name="startsIn"
              colon={false}
            >
              <DatePicker
                initialValues={dayjs("01/01/2015", "DD/MM/YYYY")}
                format={["DD/MM/YYYY", "DD/MM/YY"]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Contracts Ends In" name="endsIn" colon={false}>
              <DatePicker
                initialValues={dayjs("01/01/2015", "DD/MM/YYYY")}
                format={["DD/MM/YYYY", "DD/MM/YY"]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="* Due day" name="dueDay" colon={false}>
              <Select options={dueDays()} />
            </Form.Item>
          </Col>
        </Row>

        <CompanySelect />
      </Form>
    </Card>
  );
};
