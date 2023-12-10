import React, { useState } from 'react';

const StepDots = ({ currentStep }:any) => {
  const [activeStep, setActiveStep] = useState(currentStep);

  return (
    <div>
      {[0,1,2].map((v, index) => (
        <div
          key={index}>{ v === activeStep ? v : ''}</div>
      ))}
    </div>
  );
};
export default StepDots;