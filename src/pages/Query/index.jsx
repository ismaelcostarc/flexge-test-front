import { Row, Button, Form, Card, Space } from "antd";
import { BaseLayout } from "../../components/layout/BaseLayout";
import { PlusOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ContractList } from "./Components/ContractList";
import { Search } from "./Components/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext } from "react";
import { getContractsRequest } from "../../store/actions";
import { AuthContext } from "../../contexts/auth";

export const QueryPage = () => {
  // Redux Saga
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const contractsState = useSelector((state) => state.contracts);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    dispatch(getContractsRequest(1, token));
  }, []);

  useEffect(() => {
    console.log(contractsState);
  }, [contractsState]);

  return (
    <>
      <BaseLayout
        breadcrumbItems={[
          <span>
            <HomeOutlined /> Home
          </span>,
          "Contracts",
        ]}
      >
        <Card
          title={
            <Row justify="space-between" align="middle">
              <div>Contracts</div>
              <Link to="/contract">
                <Button>
                  <PlusOutlined /> New Contract
                </Button>
              </Link>
            </Row>
          }
        >
          <Space direction="vertical" style={{ width: "100%" }} size="large">
            <Search />

            <ContractList />
          </Space>
        </Card>
      </BaseLayout>
    </>
  );
};
