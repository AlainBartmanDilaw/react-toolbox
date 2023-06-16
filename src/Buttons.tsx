import { Button } from 'antd';
import React from 'react';

const Buttons: React.FC = () => {

    return (
        <>
            <Button type={'primary'}>Primary</Button>
            <Button type={'default'}>Default</Button>
            <Button type={'dashed'}>Dashed</Button>
            <Button type={'link'}>Link</Button>
            <Button type={'text'}>Text</Button>
            <Button type={'ghost'}>Ghost</Button>
        </>
    );

}

export default Buttons;
