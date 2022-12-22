import { Form, Select } from "antd";
import { AuthContext } from "../../../../../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../../../services/api";

export const StateSelect = ({ disabled }) => {
  const { token } = useContext(AuthContext);

  return (
    <Form.Item label="State" name="state" colon={false}>
      <Select disabled={disabled}></Select>
    </Form.Item>
  );
};
