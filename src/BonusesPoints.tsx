import { Form } from 'antd';
import InputNumberPositif from './InputNumberPositif';

const BonusesPoints: React.FC = () => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 20 },
    };

    return(
        <Form name={"BonusesPoints"}
            {...layout}>
            <Form.Item label="Score dom. correct">
                <InputNumberPositif defaultValue={2}/>
            </Form.Item>
            <Form.Item label="Score ext. correct">
                <InputNumberPositif defaultValue={2}/>
            </Form.Item>
        </Form>
    )
}
export default BonusesPoints;
