import { Form, Select } from "antd";

export const StateSelect = ({ disabled }) => {
  return (
    <Form.Item label="State" name="state" colon={false}>
      <Select disabled={disabled}></Select>
    </Form.Item>
  );
};
