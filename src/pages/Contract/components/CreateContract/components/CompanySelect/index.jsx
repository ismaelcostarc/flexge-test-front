import { Select, Form } from "antd";
import { AuthContext } from "../../../../../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../../../services/api";

export const CompanySelect = () => {
  const { token } = useContext(AuthContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const { data } = await api.get("/company", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const companies = data.map((company, index) => ({
          value: company.name,
          label: company.name,
          key: index,
          id: company._id,
        }));

        setOptions(companies);
      } catch (err) {
        console.log(err);
      }
    };

    getCompanies();
  }, []);

  return (
    <Form.Item
      label="Select a company"
      name="company"
      colon={false}
      wrapperCol={{
        span: 8,
      }}
    >
      <Select placeholder="Select..." options={options} />
    </Form.Item>
  );
};
