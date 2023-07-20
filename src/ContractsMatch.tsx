import { Form } from "antd";
import InputNumberPositif from "./InputNumberPositif";

const ContractsMatch: React.FC = () => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    return (
        <Form name={"ContractsMatch"}
            {...layout}>
            <Form.Item label="Score Exact ">
                <InputNumberPositif defaultValue={20}/>
            </Form.Item>
            <Form.Item label="Différence">
                <InputNumberPositif defaultValue={9}/>
            </Form.Item>
            <Form.Item label="Tendance">
                <InputNumberPositif defaultValue={5}/>
            </Form.Item>
            <Form.Item label="Incorrect">
                <InputNumberPositif defaultValue={1}/>
            </Form.Item>
            <Form.Item label="Non parié">
                <InputNumberPositif defaultValue={0}/>
            </Form.Item>
        </Form>
    )
}

export default ContractsMatch;
