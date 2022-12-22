import { Select, Form } from "antd";
import { AuthContext } from "../../../../../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../../../services/api";

export const CountrySelect = () => {
  const { token } = useContext(AuthContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data } = await api.get("/country?field=name", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const countries = data.map((country, index) => ({
          value: country.name,
          label: country.name,
          key: index,
        }));

        setOptions(countries);
      } catch (err) {
        console.log(err);
      }
    };

    getCountries();
  }, []);

  return (
    <Form.Item label="Country" name="country" colon={false}>
      <Select placeholder="Select..." options={options} />
    </Form.Item>
  );
};
