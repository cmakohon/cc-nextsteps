import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProgress } from "../store";
import ConfirmationModal from "./ConfirmationModal";
import Video from "./Video";

export default function CCStepper() {
  const { currentStep, incrCurrentStep, decrCurrentStep } = useProgress();
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const steps = [
    {
      label: "How We Move",
      component: <Video url="https://www.youtube.com/embed/1eJOjoywp9A" title="Move Session 1: How We Move" />
    },
    {
      label: "Move In Our Gifting",
      component: <Video url="https://www.youtube.com/embed/RIeDF18RpbM" title="Move Session 2: How We Move in Our Gifting" />
    },
    {
      label: "Move In Our Resources",
      component: <Video url="https://www.youtube.com/embed/5V8TOxpQrzI" title="Move: Move With Our Resources" />
    },
    {
      label: "Move Towards Rescue",
      component: <Video url="https://www.youtube.com/embed/muFNSfUWdOY" title="Move: How We Move Towards Rescue" />
    },
    {
      label: "Move Together",
      component: <Video url="https://www.youtube.com/embed/kZR2yDPRc6k" title="Move: How We Move Together" />
    },
    {
      label: "Next Steps Form",
      component: <span>Form</span>
    }
  ];

  const handleNext = () => {
    if (currentStep + 1 === steps.length) {
      //finished
    } else {
      incrCurrentStep();
    }
  };

  const confirmReset = () => {
    setConfirmationOpen(true);
  }

  return (
    <>
      <Stepper activeStep={currentStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 4 ? (
                  <Typography variant="caption">Last video</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Box>{step.component}</Box>
              <Box sx={{ mb: 2, mt: 1 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={decrCurrentStep}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={confirmReset}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Start Over
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <ConfirmationModal
        keepMounted
        open={confirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        value={null}
      />
    </>
  );
}
