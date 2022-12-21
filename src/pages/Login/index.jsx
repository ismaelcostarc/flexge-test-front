import { Card, Input, Form, Button, notification } from "antd";
import { Container } from "../../components/ui/Container";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { AuthContext } from "../../contexts/auth";
import { Navigate } from "react-router-dom";
import messages from "../../locales/messages";

export const LoginPage = () => {
  const [form] = useForm();
  const { token, addToken, clearToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [userIsSigned, setUserIsSigned] = useState(false);

  useEffect(() => {
    const testToken = async () => {
      if (token) {
        try {
          await api.get("/user/isValid", {
            headers: {
              Authorization: `token ${token}`,
            },
          });
          setUserIsSigned(true);
        } catch (err) {
          clearToken();
        }
      }
    };

    testToken();
  }, []);

  if (userIsSigned) {
    return <Navigate to="/query" />;
  }

  const login = async () => {
    try {
      setLoading(true);
      const { data } = await api.post("/user/signin", {
        username: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
      });
      addToken(data.token);
    } catch (err) {
      setLoading(false);
      notification.error({
        message: "Error",
        description: err.response.statusText,
      });
    }
  };

  return (
    <>
      <Container>
        <Card title="Login" style={{ width: 300 }}>
          <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={login}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: messages.login.required.username },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: messages.login.required.password },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Container>
    </>
  );
};
