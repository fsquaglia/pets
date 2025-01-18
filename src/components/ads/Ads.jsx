import React from "react";

function Icons() {
  return (
    <div className="w-1/3 border rounded-xl shadown-xl bg-orange-200 h-48"></div>
  );
}

function Ads() {
  return (
    <div className="w-full p-2 flex flex-row justify-center items-center">
      <Icons />
      <Icons />
      <Icons />
    </div>
  );
}

export default Ads;
