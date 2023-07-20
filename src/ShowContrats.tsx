import { Card, Col, Row } from 'antd';
import BonusPoints from './BonusPoints';
import ContractsMatch from './ContractsMatch';

const ShowContrats: React.FC = () => {

    return (
        <div>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Match contracts">
                        <ContractsMatch/>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Bonuses">
                        <BonusPoints/>
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
