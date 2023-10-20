import React, { createContext, useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const ProgressContext = createContext({
  value: {
    progress: {
      currentStep: -1,
      formData: {},
    },
    storeProgress: () => {},
  },
});

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    currentStep: -1,
    formData: {},
  });

  const [open, setOpen] = useState(false);

  const storeProgress = (newProgress) => {
    setProgress(newProgress);
    localStorage.setItem("progress", JSON.stringify(newProgress));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  useEffect(() => {
    const storedProgress = localStorage.getItem("progress");
    try {
      const parsedProgress = JSON.parse(storedProgress);
      if (parsedProgress) {
        if (parsedProgress.currentStep >= 0) {
          setOpen(true);
        }
        setProgress(parsedProgress);
      } else {
        setProgress({
          currentStep: -1,
          formData: {},
        });
      }
    } catch (e) {
      console.error(e);
      setProgress({
        currentStep: -1,
        formData: {},
      });
    }
  }, []);

  return (
    <>
      <ProgressContext.Provider
        value={{
          progress,
          storeProgress,
        }}
      >
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={4000}
          open={open}
          onClose={handleClose}
        >
          <SnackbarContent
            message="Welcome back! We saved your progress."
            action={action}
            sx={{ backgroundColor: "primary.main" }}
          />
        </Snackbar>
        {children}
      </ProgressContext.Provider>
    </>
  );
};

export { ProgressContext };
export default ProgressProvider;
