'use client';
import React, { useState } from 'react';
import { Stepper } from '@sume/ui/components/StepProgessBar';

const steps = [
  { label: "Details", step: 1, completed: false, isValid: false },
  { label: "Verification", step: 2, completed: false, isValid: false },
  { label: "Confirmation", step: 3, completed: false, isValid: false },
  { label: "Finish", step: 4, completed: false, isValid: false },
];

const StepProgressExamples = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [stepperSteps, setStepperSteps] = useState(steps);

  const handleStepClick = (step: number) => {
    // Validate current step before proceeding
    if (step > activeStep) {
      const currentStep = stepperSteps.find(s => s.step === activeStep);
      if (currentStep && !currentStep.completed) {
        alert(`Please complete step ${activeStep} before proceeding`);
        return;
      }
    }

    setActiveStep(step);
  };

  const markCurrentStepComplete = () => {
    setStepperSteps(prev => prev.map(s => 
      s.step === activeStep ? { ...s, completed: true, isValid: true } : s
    ));
  };

  return (
    <div className="p-8 space-y-12">
      <h2 className="text-lg font-bold">Interactive Stepper Demo</h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-medium mb-4">Horizontal Stepper</h3>
          <Stepper
            steps={stepperSteps}
            activeStep={activeStep}
            onStepClick={handleStepClick}
            color="indigo"
            direction="horizontal"
            
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-medium mb-4">Vertical Stepper</h3>
          <Stepper
            steps={stepperSteps}
            activeStep={activeStep}
            onStepClick={handleStepClick}
            color="green"
            direction="vertical"
            
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-medium mb-4">Step Controls</h3>
          <div className="flex flex-col space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Current Step: {stepperSteps.find(s => s.step === activeStep)?.label}
              </p>
              <p className="text-sm text-gray-600">
                Status: {stepperSteps.find(s => s.step === activeStep)?.completed ? "Completed" : "Pending"}
              </p>
            </div>
            <button
              onClick={markCurrentStepComplete}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Mark Current Step as Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepProgressExamples;