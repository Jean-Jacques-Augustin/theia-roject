import {Snackbar, IconButton} from '@mui/material';
import React = require('react');


interface NotificationProps {
    message: string;
    open: boolean;
    onClose: () => void;
}

const Notification = ({message, open, onClose}: NotificationProps) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            message={message}
            action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
                        A
                    </IconButton>
                </React.Fragment>
            }
        />
    );
};

export default Notification;
