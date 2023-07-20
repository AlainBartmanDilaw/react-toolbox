import { Form } from 'antd';
import InputNumberPositif from 'src/InputNumberPositif';

const BonusPoints: React.FC = () => {
    const layout = {
        labelCol: { span: 8 },
        // wrapperCol: { span: 16 },
    };
    return (
        <Form name={"Bonus Points"}
              {...layout}>
            <Form.Item label="Dom. Score exact">
                <InputNumberPositif defaultValue={2}/>
            </Form.Item>
            <Form.Item label="Ext. Score exact">
                <InputNumberPositif defaultValue={2}/>
            </Form.Item>
        </Form>
    );
}

export default BonusPoints;
