import { Row, Button, Card, Space, Col, notification } from "antd";
import { RedoOutlined, PlusOutlined, HomeOutlined } from "@ant-design/icons";
import { CreateContract } from "./components/CreateContract";
import { ContractsProducts } from "./components/ContractsProducts";
import { BaseLayout } from "../../components/layout/BaseLayout";
import { useState, useContext } from "react";
import { api as contractsAPI } from "../../services/api";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

export const ContractPage = () => {
  const [clearForm, setClearForm] = useState(false);
  const [data, setData] = useState({});
  const [productList, setProductList] = useState({});
  const [api, contextHolder] = notification.useNotification();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const createContract = () => {
    if (productList.length === 0) {
      api.error({
        message: "At least one product is required",
        placement: "topRight",
      });
      return;
    }

    const {
      country,
      state,
      documentNumber,
      socialReason,
      address,
      district,
      number,
      zipCode,
      email,
      startsIn,
      dueDay,
    } = data;

    if (
      !country ||
      !state ||
      !documentNumber ||
      !socialReason ||
      !address ||
      !district ||
      !number ||
      !zipCode ||
      !email ||
      !startsIn ||
      !dueDay
    ) {
      api.error({
        message: "Check if all of the required filds are filled",
        placement: "topRight",
      });
      return;
    }

    createContractAtAPI({
      ...data,
      products: productList,
    });
  };

  const createContractAtAPI = async (contract) => {
    try {
      await contractsAPI.post("/contract", contract, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/query");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BaseLayout
      breadcrumbItems={[
        <span>
          <HomeOutlined /> Home
        </span>,
        "Create Contract",
      ]}
    >
      {contextHolder}
      <Space direction="vertical" style={{ width: "100%" }} size="small">
        <CreateContract clearForm={clearForm} setData={setData} />

        <ContractsProducts
          clearForm={clearForm}
          setProductList={setProductList}
        />

        <Card>
          <Row justify="end">
            <Col>
              <Space>
                <Button onClick={() => setClearForm(!clearForm)}>
                  <RedoOutlined /> Discard Changes
                </Button>
                <Button onClick={createContract}>
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
