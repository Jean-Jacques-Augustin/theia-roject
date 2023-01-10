import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface CustomModalProps {
    open: boolean;
    onCloseButtonClick: () => void;
    onAcceptButtonClick: () => void;
    message: string;    
    title: string;
}

export default function CustomDialog({message,onAcceptButtonClick,onCloseButtonClick, title} : CustomModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog_title"
        aria-describedby="this is a dialog box to confirm the action "
      >
        <DialogTitle id="dialog_title">
            {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseButtonClick}>No</Button>
          <Button onClick={onAcceptButtonClick}>Yes</Button>
        </DialogActions>
      </Dialog>
  );
}

const useCustomDialog = () => {
    const [open, setOpen] = React.useState(false);

    const otherAction = () => {
        // les opération backend
    }

   return( <CustomDialog
        open={open}
        onCloseButtonClick={() => setOpen(false)}
        onAcceptButtonClick={otherAction}
        title={"Titre du message"}
        message={"Message"}
    />)
}