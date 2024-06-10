const DATA = [
  {
    label: "Instant",
    desc: "No links or codes. Cobrowse with users directly within your productand see your customer's screen instantly.",
    background: "#F5F6FF",
  },
  {
    label: "Privacy",
    desc: "You choose what to see and what to hide with customizable data masking options.",
    background: "#F5FFE5",
  },
  {
    label: "Console",
    desc: "See console events and user journeys during live calls to troubleshoot effortlessly.",
    background: "#FFECD7",
  },
];

const WhyChooseChatNowTool = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-9 xl:gap-20 wrapper max-width py-14">
      <div className="flex flex-col gap-4 text-center xl:text-left xl:max-w-[540px]">
        <h2 className="font-900 text-2xl md:text-[36px] text-primary-500 leading-[110%]">
          Why You Choose NDE's ChatNow tool?
        </h2>
        <p className="text-xs md:text-base leading-[165%] font-merriweather">
          Offer top-notch cobrowsing directly from your app with one-click
          initiation to enhance remote support and solve customer issues more
          efficiently.
        </p>
      </div>
      <div className="flex flex-col gap-10 xl:flex-grow">
        {DATA.map((data, index) => (
          <div
            key={index}
            style={{
              background: data.background,
            }}
            className="flex flex-col gap-4 p-7 rounded-xl"
          >
            <h3 className="font-900 text-[20px] md:text-2xl tracking-[-2px] leading-[110%] sm:max-w-[350px]">
              {data.label}
            </h3>
            <p className="text-sm font-merriweather md:text-base leading-[165%] sm:max-w-[350px]">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseChatNowTool;
