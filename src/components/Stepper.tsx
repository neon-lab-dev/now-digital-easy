const Stepper = ({
  steps,
  activeStep,
}: {
  steps: string[];
  activeStep: number;
}) => {
  const totalSteps = steps.length;
  const width = `${(100 / (totalSteps - 1)) * activeStep}%`;

  return (
    <div className="w-[240px] mb-3">
      <div className="flex justify-between items-center relative before:bg-black before:absolute before:h-1 before:top-1/2 before:w-full before:left-0">
        {steps.map((step, i) => (
          <div className="relative z-10" key={step}>
            <div
              className={`size-5 rounded-full border-2 flex justify-center items-center ${
                activeStep > i ? "border-[#0011FF]" : "border-black"
              } ${activeStep > i ? "bg-[#0011FF]" : "bg-white"}`}
            >
              {activeStep > i ? (
                <div className="text-[14px] mb-1 font-semibold text-white rotate-45 text-center -scale-x-100">
                  L
                </div>
              ) : (
                <span
                  className={`text-[15px] ${
                    activeStep > i ? "text-white" : "text-black"
                  } font-medium`}
                >
                  {i + 1}
                </span>
              )}
            </div>
            <div className="absolute top-8 left-1/2 -translate-y-2/4 -translate-x-2/4">
              <span
                className={`text-[14px] ${
                  activeStep > i ? "text-[#0011FF]" : "text-black"
                } font-semibold`}
              >
                {step}
              </span>
            </div>
          </div>
        ))}
        <div
          className="absolute h-1 bg-[#0011FF] top-1/2 left-0"
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
};

export default Stepper;
