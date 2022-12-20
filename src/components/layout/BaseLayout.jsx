import { Layout, Button, Menu, Breadcrumb, Typography } from "antd";
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
const { Text } = Typography;

export const BaseLayout = ({ breadcrumbItems, children }) => {
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
            {breadcrumbItems.map((item, index) =>
              index === breadcrumbItems.length - 1 ? (
                <Breadcrumb.Item key={item}>
                  <Text strong>{item}</Text>
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
              )
            )}
          </Breadcrumb>
          {children}
        </Content>
      </Layout>
    </>
  );
};
