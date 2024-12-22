import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import styles from './CreationTaskDialog.module.scss'

interface CreateTaskDialogProps {
    open: boolean;
    handleClose:() => void;
    newTaskTitle: string;
    handleInputChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    OnCreateTask:() => void;
}
export const CreateTaskDialog = ({open, handleClose, newTaskTitle, handleInputChange, OnCreateTask}:CreateTaskDialogProps) => {
    return (
        <div className={styles.CreateTaskDialog}>
            <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add one new task</DialogTitle>
        <DialogContent>
          <TextField
          value={newTaskTitle}
          onChange={handleInputChange} 
          autoFocus
          label="e.g: Send email to..."
          multiline
          rows={4} 
          variant="outlined"
          fullWidth 
        />
        </DialogContent>
        <DialogActions className={styles.DialogActions}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={OnCreateTask}>Create task</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}