import Button from "@/components/Button";

const PLANS = [
  {
    label: "Start-up Plan",
    price: 58,
  },
  {
    label: "Enterprise Plan",
    price: 199,
  },
];

const ChooseYourPlan = () => {
  return (
    <div className="w-full bg-[#CDE4F2] mb-12">
      <div className="flex flex-col wrapper max-width items-center justify-center gap-6 py-12">
        <h1 className="text-center font-source-sans-pro font-900 text-primary-500 text-[36px]  md:text-[42px] xl:text-[61px] tracking-[-2px] leading-[110%] max-w-[750px]">
          Choose Your Plan
        </h1>
        <p className="font-merriweather text-primary-500 text-sm md:text-base text-center max-w-[700px]">
          Businesses just love working with us!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:w-auto">
          {PLANS.map((plan, index) => (
            <div
              key={index}
              style={{
                background:
                  "linear-gradient(249deg, #80B9EE 2.96%, #4BF297 99.04%)",
              }}
              className="flex w-full flex-col text-center gap-4 p-7 items-center justify-center lg:w-[400px] xl:w-[490px] rounded-xl"
            >
              <h3 className="text-primary-500 font-900 text-[32px] tracking-[-1px] leading-[140%] ">
                {plan.label}
              </h3>
              <div className="flex flex-col gap-0">
                <span className="text-7xl font-900 text-primary-500">
                  {plan.price}
                </span>
                <span className="font-700">/user/month</span>
              </div>

              <Button
                variant="primary"
                className="text-[17px] text-primary-500 px-[14px] py-2.5 border-primary-500"
              >
                Choose Your Plan
              </Button>
              <button className="underline font-700 text-primary-500 font-merriweather">
                Contact Sales
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPlan;
