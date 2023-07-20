import { Card, Col, Row } from 'antd';
import ContractsMatch from './ContractsMatch';

const ShowContrats: React.FC = () => {

    return (
        <div>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Match contract">
                        <ContractsMatch/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Bonuses" bordered={false}>
                        Bonuses
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Competition" bordered={false}>
                        Competition
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

export default ShowContrats;