import { Row, Button, Card, Space, Modal, Typography, Pagination } from "antd";
import { BaseLayout } from "../../components/layout/BaseLayout";
import { PlusOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ContractList } from "./components/ContractList";
import { Search } from "./components/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext, useState, useMemo } from "react";
import {
  getContractsRequest,
  deleteContractRequest,
} from "../../store/actions";
import { AuthContext } from "../../contexts/auth";

export const QueryPage = () => {
  const dispatch = useDispatch();
  const contractsState = useSelector((state) => state.contracts.contracts);
  const loadingContractsState = useSelector((state) => state.contracts.loading);
  const { token } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [contracts, setContracts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contractToDelete, setContractToDelete] = useState(null);

  const { Text } = Typography;

  useEffect(() => {
    dispatch(getContractsRequest(page, token));
  }, [page]);

  useMemo(() => {
    if (contractsState.list) {
      setContracts(
        contractsState.list.map((contract) => ({
          ...contract,
          key: contract._id,
        }))
      );
      setNumberOfPages(contractsState.pages);
    }
  }, [contractsState]);

  const editContract = (id) => {};
  
  const deleteContract = (id) => {
    setContractToDelete(id);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    dispatch(deleteContractRequest(contracts[contractToDelete]._id, token));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setContractToDelete(null);
    setIsModalOpen(false);
  };

  const onChangePagination = (value) => {
    setPage(value)
  }

  return (
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

          <ContractList
            contracts={contracts}
            editContract={editContract}
            deleteContract={deleteContract}
            loading={loadingContractsState}
          />

          <Pagination defaultCurrent={1} total={numberOfPages * 10} onChange={onChangePagination}/>
        </Space>
      </Card>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Text>
          Do you want to delete the contract{" "}
          {contracts[contractToDelete]?.documentNumber}?
        </Text>
      </Modal>
    </BaseLayout>
  );
};
