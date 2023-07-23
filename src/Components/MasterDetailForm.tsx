import React from 'react';
import { Table } from 'antd';
import { EditionLine, mockData } from 'src/mockData/CompetitionLine';

interface ExpandedRowProps {
    lines: EditionLine[];
}

export interface InvoiceDisplay {
    code: string;
    description: string;
    lines: EditionLine[];
}


const ExpandedRow: React.FC<ExpandedRowProps> = ({ lines }) => {
    const columns = [
        { title: 'Edition', dataIndex: 'code', key: 'code' },
        { title: 'Official name', dataIndex: 'description', key: 'description' },
        { title: 'Start Date', dataIndex: 'startDate', key: 'startDate', render: (date: Date) => date.toLocaleDateString() },
        { title: 'Finish Date', dataIndex: 'finishDate', key: 'finishDate', render: (date: Date) => date.toLocaleDateString() },
    ];

    return <Table columns={columns} dataSource={lines} rowKey="id" />;
};

const MasterDetailForm: React.FC = () => {
    const columns = [
        { title: 'Competition name', dataIndex: 'code', key: 'code' },
        { title: 'Official name', dataIndex: 'description', key: 'description' },
        {
            title: 'Number of Lines',
            dataIndex: 'numberOfLines',
            key: 'numberOfLines',
            render: (_: any, record: InvoiceDisplay) => record.lines.length,
        },
    ];

    const modifiedData: InvoiceDisplay[] = mockData.map((competition) => {
        const { idt, ...rest } = competition; // Destructure ID from the invoice object
        return { key: idt, ...rest }; // Use 'key' property as 'id' for the rowKey
    });

    const expandedRowRender = (record: InvoiceDisplay) => {
        return <ExpandedRow lines={record.lines} />;
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={modifiedData}
                rowKey="key" // Use 'key' property as rowKey
                expandable={{ expandedRowRender }}
            />
        </div>
    );
};

export default MasterDetailForm;
