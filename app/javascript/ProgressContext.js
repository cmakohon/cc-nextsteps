import React, { createContext, useState, useEffect } from "react";

const ProgressContext = createContext({
  value: {
    progress: {
      currentStep: 0,
      formData: {},
    },
    storeProgress: () => {},
  },
});

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    currentStep: 0,
    formData: {},
  });
  const storeProgress = (newProgress) => {
    setProgress(newProgress);
    localStorage.setItem("progress", JSON.stringify(newProgress));
  };

  useEffect(() => {
    const storedProgress = localStorage.getItem("progress");
    try {
      const parsedProgress = JSON.parse(storedProgress);
      if (parsedProgress) {
        setProgress(parsedProgress);
      } else {
        setProgress({
          currentStep: 0,
          formData: {},
        })
      }
    } catch (e) {
      console.error(e)
      setProgress({
        currentStep: 0,
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
        {children}
      </ProgressContext.Provider>
    </>
  );
};

export { ProgressContext };
export default ProgressProvider;
