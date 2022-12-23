import { Table, Space, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect } from "react";

export const ContractList = ({
  contracts,
  editContract,
  deleteContract,
  loading
}) => {
  const columns = [
    {
      title: "Document Number",
      dataIndex: "documentNumber",
      key: "documentNumber",
    },
    {
      title: "Social Reason",
      dataIndex: "socialReason",
      key: "socialReason",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Actions",
      key: "actions",
      width: "10%",
      render: (_, record, index) => (
        <Space size="middle">
          <Button onClick={() => editContract(index)} type="text" disabled>
            <EditOutlined />
          </Button>
          <Button onClick={() => deleteContract(index)} type="text">
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={contracts} loading={loading} pagination={false}/>;
};
