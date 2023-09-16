import { Input, Form, Button } from "antd";

export const FormQuestion = ({ fun }) => {
  const [form] = Form.useForm();
  const handleQuery = (values) => {
    console.log(values["Qtext"]);
    fun(values["Qtext"]);
  };
  return (
    <Form
      name="question"
      // wrapperCol={{ span: 16 }}
      style={{ Width: 1000 }}
      layout="inline"
      form={form}
      onFinish={handleQuery}
    >
      <Form.Item name="Qtext" style={{ width: 400 }}>
        <Input placeholder="Su pregunta" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Enviar Pregunta
      </Button>
    </Form>
  );
};
