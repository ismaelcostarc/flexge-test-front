import { Row, Button, Card, Space } from "antd";
import { BaseLayout } from "../../components/layout/BaseLayout";
import { PlusOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ContractList } from "./Components/ContractList";
import { Search } from "./Components/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext, useState, useReducer } from "react";
import { getContractsRequest } from "../../store/actions";
import { AuthContext } from "../../contexts/auth";

export const QueryPage = () => {
  const dispatch = useDispatch();
  const contractsState = useSelector((state) => state.contracts);
  const { token } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    dispatch(getContractsRequest(page, token));
  }, []);

  useEffect(() => {
    setContracts(
      contractsState.contracts.map((contract) => ({
        ...contract,
        key: contract._id,
      }))
    );
  }, [contractsState]);

  const editContract = (id) => {}
  const removeContract = (id) => {}

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

            <ContractList contracts={contracts} setPage={setPage} editContract={editContract} removeContract={removeContract}/>
          </Space>
        </Card>
      </BaseLayout>
    </>
  );
};
