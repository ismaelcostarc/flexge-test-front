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
  Upload,
} from "antd";
import {
  UploadOutlined,
  ArrowLeftOutlined,
  RedoOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { BaseLayout } from "../../components/layout/BaseLayout";
import { Link } from "react-router-dom";

export const ContractPage = () => {
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log(form);
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
    <>
      <BaseLayout breadcrumbItems={["Home", "Create Contract"]}>
        <Space direction="vertical" style={{ width: "100%" }} size="small">
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
            <Form>
              <Row gutter={24}>
                <Col span={8}>
                  <Form.Item label="Country" name="country" colon={false}>
                    <Select></Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="State" name="state" colon={false}>
                    <Select></Select>
                  </Form.Item>
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
                  <Form.Item
                    label="Social Reason"
                    name="socialReason"
                    colon={false}
                  >
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
                    <DatePicker />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    label="Contracts Ends In"
                    name="contractsEndsIn"
                    colon={false}
                  >
                    <DatePicker />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Due day" name="dueDay" colon={false}>
                    <Select></Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item
                    label="Upload the contract"
                    name="file"
                    colon={false}
                  >
                    <Upload {...uploadProps}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
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
                <Select></Select>
              </Form.Item>
            </Form>
          </Card>

          <Card title="Contract's Products">
            <Space direction="vertical" style={{ width: "100%" }} size="middle">
              <Form layout="inline">
                <Row gutter={24}>
                  <Col span={6}>
                    <Form.Item label="Product">
                      <Select></Select>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item label="Amount">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item label="Final Unit Price (R$)">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item label="Installments">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item label="Paid Installments">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item label="Beginning of Term">
                      <DatePicker />
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item>
                      <Button>Add</Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Table></Table>
            </Space>
          </Card>

          <Card>
            <Row justify="end">
              <Col>
                <Space>
                  <Button>
                    <RedoOutlined /> Discard Changes
                  </Button>
                  <Button>
                    <PlusOutlined /> Create
                  </Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Space>
      </BaseLayout>
    </>
  );
};
