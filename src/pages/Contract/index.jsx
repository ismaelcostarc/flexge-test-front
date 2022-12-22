import { Row, Button, Form, Card, Space, Col, Typography } from "antd";
import { RedoOutlined, PlusOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CreateContract } from "./components/CreateContract";
import { ContractsProducts } from "./components/ContractsProducts";
import { BaseLayout } from "../../components/layout/BaseLayout";

export const ContractPage = () => {
  return (
    <BaseLayout
      breadcrumbItems={[
        <span>
          <HomeOutlined /> Home
        </span>,
        "Create Contract",
      ]}
    >
      <Space direction="vertical" style={{ width: "100%" }} size="small">
        <CreateContract />

        <ContractsProducts />

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
  );
};
