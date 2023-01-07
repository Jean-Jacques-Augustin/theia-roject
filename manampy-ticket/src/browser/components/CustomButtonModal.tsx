import {Button} from '@mui/material';
import * as React from 'react';

interface ModalButtonProps  {
    text: string;
}

const CustomModalButtom: React.FC = ({text}: ModalButtonProps) => {
    return (
        <Button className={"modalButton"}>{text}</Button>
    );
};

export default CustomModalButtom;
