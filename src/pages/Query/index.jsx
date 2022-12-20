import {
  Breadcrumb,
  Layout,
  Row,
  Button,
  Form,
  Menu,
  Card,
  Table,
  Input,
  Space,
} from "antd";
import {
  DashboardOutlined,
  ProfileOutlined,
  UserOutlined,
  FolderOutlined,
  BookOutlined,
  FolderOpenOutlined,
  StarOutlined,
  SettingOutlined,
  DollarCircleOutlined,
  MessageOutlined,
  DesktopOutlined,
  FilterOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;

export const QueryPage = () => {
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log(form);
  };

  const items = [
    {
      label: (
        <span>
          <DashboardOutlined /> Dashboard
        </span>
      ),
    },
    {
      label: (
        <span>
          <ProfileOutlined /> Profile
        </span>
      ),
    },
    {
      label: (
        <span>
          <UserOutlined /> Admin
        </span>
      ),
    },
    {
      label: (
        <span>
          <FolderOutlined /> Basic Register
        </span>
      ),
    },
    {
      label: (
        <span>
          <BookOutlined /> Content
        </span>
      ),
    },
    {
      label: (
        <span>
          <FolderOpenOutlined /> Academic
        </span>
      ),
    },
    {
      label: (
        <span>
          <StarOutlined /> Ranking
        </span>
      ),
    },
    {
      label: (
        <span>
          <FilterOutlined /> Reports
        </span>
      ),
    },
    {
      label: (
        <span>
          <SettingOutlined /> Config
        </span>
      ),
    },
    {
      label: (
        <span>
          <DollarCircleOutlined /> Payments
        </span>
      ),
    },
    {
      label: (
        <span>
          <MessageOutlined /> Messages
        </span>
      ),
    },
    {
      label: (
        <span>
          <DesktopOutlined /> KPIs
        </span>
      ),
    },
    {
      label: (
        <Button>
          <PoweroffOutlined />
        </Button>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" items={items} />
        </Header>
        <Content>
          <Breadcrumb style={{ padding: "1rem" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Contracts</Breadcrumb.Item>
          </Breadcrumb>

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
        </Content>
      </Layout>
    </>
  );
};
