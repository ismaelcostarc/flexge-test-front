import { Row, Button, Card, Space, Col } from "antd";
import { RedoOutlined, PlusOutlined, HomeOutlined } from "@ant-design/icons";
import { CreateContract } from "./components/CreateContract";
import { ContractsProducts } from "./components/ContractsProducts";
import { BaseLayout } from "../../components/layout/BaseLayout";
import { useState } from "react";

export const ContractPage = () => {
  const [clearForm, setClearForm] = useState(false)

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
        <CreateContract clearForm={clearForm}/>

        <ContractsProducts clearForm={clearForm}/>

        <Card>
          <Row justify="end">
            <Col>
              <Space>
                <Button onClick={() => setClearForm(!clearForm)}>
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
