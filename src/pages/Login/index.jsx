import { Card, Input, Form, Button } from "antd";
import messages from "../../locales/messages";
import style from "./style.module.css";

export const LoginPage = () => {

  return (
    <>
      <div className={style.container}>
        <Card title="Login" style={{ width: 300 }}>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={() => {
              console.log("done");
            }}
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
      </div>
    </>
  );
};
