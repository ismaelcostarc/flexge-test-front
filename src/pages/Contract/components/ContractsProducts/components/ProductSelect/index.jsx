import { Select, Form } from "antd";
import { AuthContext } from "../../../../../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../../../services/api";

export const ProductSelect = () => {
  const { token } = useContext(AuthContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/product", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const products = data.map((country, index) => ({
          value: country.name,
          label: country.name,
          key: index,
          id: country._id
        }));

        setOptions(products);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <Form.Item name="name" colon={false}>
      <Select placeholder="Select..." options={options} />
    </Form.Item>
  );
};
