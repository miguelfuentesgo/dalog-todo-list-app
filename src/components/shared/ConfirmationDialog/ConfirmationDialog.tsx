
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import styles from './ConfirmationDialog.module.scss'


interface ConfirmationDialogProps {
    openDialog: boolean;
    title: string;
    onClose:() => void;
    onConfirm:() => void;
}
export const ConfirmationDialog = ({openDialog, title, onClose, onConfirm}:ConfirmationDialogProps) => {

    
    
    return (
        <div className={styles.ConfirmationDialog}>
        <Dialog
        open={openDialog}
        onClose={onClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>No</Button>
          <Button onClick={onConfirm}>Yes</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}