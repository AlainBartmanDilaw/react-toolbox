import { Form } from 'antd';
import InputNumberPositif from './InputNumberPositif';

const BonusPoints: React.FC = () => {
    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 16 },
    };
    return (
        <Form name={"Bonus Points"}
              {...layout}>
            <Form.Item label="Domicile Score exact">
                <InputNumberPositif defaultValue={2}/>
            </Form.Item>
            <Form.Item label="Extérieur Score exact">
                <InputNumberPositif defaultValue={2}/>
            </Form.Item>
        </Form>
    );
}

export default BonusPoints;
