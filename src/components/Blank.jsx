import React from "react";

const Blank = () => {
  return (
    <div className="w-full flex justify-center items-center h-[100vh] bg-black ">
      <div className="w-11/12  flex h-5/6 rounded-2xl bg-zinc items-center justify-center">
        <p className="font-sans font-light cursor-pointer text-xl ">
          This space is purposely left blank.
        </p>
      </div>
    </div>
  );
};

export default Blank;
