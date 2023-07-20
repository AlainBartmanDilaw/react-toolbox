import { Form } from 'antd';
import InputNumberPositif from 'src/InputNumberPositif';

const CompetitionPoints: React.FC = () => {

    const layout = {
        labelCol: { span: 8 },
        // wrapperCol: { span: 10 },
    };

    return(
        <Form name={"Competition Points"}
              {...layout}>
            <Form.Item label="Vainqueur">
                <InputNumberPositif defaultValue={50}/>
            </Form.Item>
            <Form.Item label="Finaliste">
                <InputNumberPositif defaultValue={25}/>
            </Form.Item>
            <Form.Item label="1er groupe">
                <InputNumberPositif defaultValue={15}/>
            </Form.Item>
            <Form.Item label="Meilleure attaque">
                <InputNumberPositif defaultValue={20}/>
            </Form.Item>
            <Form.Item label="Meilleur défense">
                <InputNumberPositif defaultValue={20}/>
            </Form.Item>
        </Form>
    );
}
export default CompetitionPoints;
