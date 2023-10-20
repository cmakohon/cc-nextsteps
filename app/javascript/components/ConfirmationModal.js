import React, { useContext } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { ProgressContext } from "../ProgressContext";

export default function ConfirmationModal({ onClose, valueProp, open, ...other }) {
  const { storeProgress } = useContext(ProgressContext);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    storeProgress({
      currentStep: -1,
      formData: {},
    })
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