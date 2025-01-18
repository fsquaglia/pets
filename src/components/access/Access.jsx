import React from "react";

function Icons() {
  return (
    <div className="size-12 sm:size-16 rounded-full bg-orange-100 border border-orange-300"></div>
  );
}

function Access() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 py-4">
      <div className="flex flex-row justify-center gap-4">
        <Icons />
        <Icons />
        <Icons />
        <Icons />
      </div>
      <div className="flex flex-row justify-center gap-4">
        <Icons />
        <Icons />
        <Icons />
        <Icons />
      </div>
    </div>
  );
}

export default Access;
