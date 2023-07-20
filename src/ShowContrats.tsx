import CompetitionPoints from 'src/CompetitionPoints';
import { Card, Col, Row } from 'antd';
import BonusPoints from 'src/BonusPoints';
import ContractsMatch from 'src/ContractsMatch';

const ShowContrats: React.FC = () => {

    return (
        <div>
            <Row gutter={10}>
                <Col span={7}>
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
                    <Card title="Competition">
                        <CompetitionPoints/>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

export default ShowContrats;
