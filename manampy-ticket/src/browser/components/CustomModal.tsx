import { Button, Paper, Typography } from '@mui/material';
import React = require('react');

interface ModalProps {
    onCloseButtonClick: () => void;
    onAcceptButtonClick: () => void;
    message: string;
    title: string;
}

const CustomModal = ({ message, onAcceptButtonClick, onCloseButtonClick, title }: ModalProps) => {
    return (
        <Paper id="modal" style={{ width: 200, margin: 'auto', padding: '2vh' }} variant="outlined">
            <div style={{ margin: '2vh auto' }}>
                <Typography align="center" style={{ padding: 2 }}>
                    {title}
                </Typography>
                <Typography align="center">{message}</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <Button
                    onClick={onCloseButtonClick}
                    variant="outlined"
                    size="small"
                    style={{ textTransform: 'none', backgroundColor: 'red' }}
                >
                    Annuler
                </Button>
                <Button
                    onClick={onAcceptButtonClick}
                    variant="outlined"
                    size="small"
                    style={{ textTransform: 'none', backgroundColor: 'green' }}
                >
                    Accepter
                </Button>
            </div>
        </Paper>
    );
};

export default CustomModal;


/**
 * Path: manampy-ticket\src\browser\components\CustomModal.tsx
 * state : boolean => 
 * si oui => ActionApresAffichageModal();
 *  pregressbar:() => theia Message Service
 * si non => ne pas afficher le modal => break
 */
