const Stepper = ({
  steps,
  activeStep,
}: {
  steps: string[];
  activeStep: number;
}) => {
  const totalSteps = steps.length;
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <div className="w-[150px] xs:w-[200px] sm:w-[280px] mb-2">
      <div className="flex justify-between relative before:bg-slate-200 before:absolute before:h-1 before:top-1/2 before:transform-y-1/2 before:w-full before:left-0">
        {steps.map((step, i) => (
          <div className="relative z-10" key={step}>
            <div
              className={`size-5 rounded-full border-2 border-zinc-200 flex justify-center items-center transition-all ease-in delay-200 ${
                activeStep >= i ? "border-[#0011FF]" : ""
              } ${activeStep >= i ? "bg-[#0011FF]" : "bg-white"}`}
            >
              {activeStep > i ? (
                <div className="text-[10px] font-semibold text-white rotate-45 -scale-x-100">
                  L
                </div>
              ) : (
                <span
                  className={`text-[10px] ${
                    activeStep >= i ? "text-white" : "text-zinc-300"
                  } font-medium`}
                >
                  {i + 1}
                </span>
              )}
            </div>
            <div className="absolute top-7 left-1/2 -translate-y-2/4 -translate-x-2/4">
              <span
                className={`text-[10px] ${
                  activeStep >= i ? "text-[#0011FF]" : "text-zinc-400"
                } font-semibold`}
              >
                {step}
              </span>
            </div>
          </div>
        ))}
        <div
          className="absolute h-1 bg-[#0011FF] w-full top-1/2 transform-y-1/2 transition-all ease-in delay-200 left-0"
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
};

export default Stepper;
