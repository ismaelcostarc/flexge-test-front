import { Table, Space, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const ContractList = ({
  contracts,
  setPage,
  editContract,
  removeContract,
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
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={editContract(record._id)} type="text">
            <EditOutlined />
          </Button>
          <Button onClick={removeContract(record._id)} type="text">
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={contracts} />;
};
