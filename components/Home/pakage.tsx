import Link from "next/link";

const Package = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="bg-[#fef7f2] p-2 mt-10 rounded-3xl w-full sm:w-[1260px] mx-auto h-auto sm:h-56 flex items-center justify-center">
          <h1 className="font-semibold text-xl sm:text-5xl text-center">
            Full Coverage With the Best Prepaid <br />
            <span className="text-[#f17a96]">USA</span> eSIM Plans
          </h1>
        </div>

        <h1 className="font-semibold text-3xl sm:text-5xl mt-10 px-4 text-left ml-30">
          You can get your <span className="text-[#f34b72]">Phonico </span>
          <br />
          <span className="mt-6">eSIM in 3 easy steps!</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-30 mt-10 px-4 sm:px-10 justify-center  text-center sm:text-left">
          <div>
            <h1 className="font-bold text-2xl">1. Choose Your Plan</h1>
            <p className="font-semibold text-sm sm:text-base">
              Select the best eSIM plan <br /> that meets your needs.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">2. Buy Your eSIM Online</h1>
            <p className="font-semibold text-sm sm:text-base">
              You can buy your eSIM online, <br /> and it’s ready to use in
              minutes.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">3. Active Instantly</h1>
            <p className="font-semibold text-sm sm:text-base">
              There is no wait, and there is no <br /> paperwork. Just click buy
              now, and you will <br /> receive a QR code in your e-mail for
              activation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
