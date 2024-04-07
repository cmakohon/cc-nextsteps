import React from "react";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { useProgress } from "../store";

export default function ConfirmationModal({ onClose, valueProp, open, ...other }) {
  const { reset } = useProgress();

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    reset();
    onClose();
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle>Confirm</DialogTitle>
      <DialogContent>
        Are you sure you want to start over? Your progress will be lost.
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}