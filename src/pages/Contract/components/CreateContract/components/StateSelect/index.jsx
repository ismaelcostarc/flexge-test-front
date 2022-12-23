import { Form, Select } from "antd";
import { AuthContext } from "../../../../../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../../../services/api";

export const StateSelect = ({ disabled, countryId }) => {
  const { token } = useContext(AuthContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (countryId) {
      const getStates = async () => {
        try {
          const { data } = await api.get(`/country/${countryId}?field=states`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          const states = data[0].states.map((state, index) => ({
            value: state,
            label: state,
            key: index,
          }));

          setOptions(states);
        } catch (err) {
          console.log(err);
        }
      };

      getStates();
    }
  }, [countryId]);

  return (
    <Form.Item label="* State" name="state" colon={false}>
      <Select disabled={disabled} options={options}></Select>
    </Form.Item>
  );
};
