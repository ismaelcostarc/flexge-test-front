import { Card, Input, Form, Button, notification } from "antd";
import { Container } from "../../components/ui/Container";
import messages from "../../locales/messages";
import { api } from "../../services/api";
import { useContext } from "react";
import { useForm } from "antd/es/form/Form";
import { AuthContext } from "../../contexts/auth";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const [form] = useForm();
  const { token, addToken } = useContext(AuthContext);

  if (token) {
    return <Navigate to="/query" />;
  }

  const login = async () => {
    try {
      const { data } = await api.post("/user/signin", {
        username: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
      });
      addToken(data.token);
    } catch (err) {
      notification.error({
        message: "Error",
        description: err.response.statusText,
      });
    }
  };

  // chamada para API
  // loading
  // error
  // se sucesso, login para setar o token e redirecionar

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
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Container>
    </>
  );
};
