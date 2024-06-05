import React from "react";
import { SyncLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center h-full w-full",
        className
      )}
    >
      <SyncLoader color="#36d7b7" size={10} />
    </div>
  );
};

export default Loading;
