import { Row, Button, Form, Card, Table, Input, Space } from "antd";
import { BaseLayout } from "../../components/layout/BaseLayout";

export const QueryPage = () => {
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log(form);
  };

  return (
    <>
      <BaseLayout breadcrumbItems={['Home', 'Contracts']}>
        <Card
          title={
            <Row justify="space-between" align="middle">
              <div>Contracts</div>
              <Button>New Contract</Button>
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
              <Form.Item
                label="Document Number"
                name="documentNumber"
                colon={false}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Social Reason"
                name="socialReason"
                colon={false}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Company" name="company" colon={false}>
                <Input />
              </Form.Item>
              <Button htmlType="submit">Search</Button>
            </Form>

            <Table></Table>
          </Space>
        </Card>
      </BaseLayout>
    </>
  );
};
