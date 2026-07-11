import Link from "next/link";

const Package = () => {
  return (
    <div>
      <div className="mt-10">
        {/* Heading Section Banner */}
        <div className="bg-[#fef7f2] p-4 mt-10 rounded-3xl w-full max-w-[1260px] mx-auto min-h-32 sm:h-56 flex items-center justify-center">
          <h1 className="font-semibold text-2xl sm:text-5xl text-center text-slate-900 leading-tight">
            Full Coverage With the Best Prepaid <br />
            <span className="text-[#f17a96]">USA</span> eSIM Plans
          </h1>
        </div>

        {/* Steps Section Container */}
        <div className="w-full max-w-[1260px] mx-auto mt-16 px-4">
          {/* Section Main Title */}
          <h2 className="font-semibold text-3xl sm:text-5xl text-left  text-slate-900 leading-tight">
            You can get your <span className="text-[#f34b72]">Phonico</span>
            <br />
            <span className="mt-2 block">eSIM in 3 easy steps!</span>
          </h2>

          {/* Steps Content Area with Background Graphic */}
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto  min-h-[500px] md:min-h-[600px]">
          {/* Background Image */}
          <img
            src="/stepsBg.svg"
            alt="Steps Background"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
          />

          <div className="absolute z-10 top-[80%] left-[80%] md:left-[10%] max-w-[280px] text-center sm:text-left">
            <h2 className="font-bold text-2xl md:text-2xl text-slate-950">
              Choose Your Plan
            </h2>
            <p className="font-medium mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
              Select the best eSIM plan that meets your needs.
            </p>
          </div>

          <div className="absolute z-10 top-[60%] left-[40%] md:left-[45%] max-w-[280px] text-center sm:text-left">
            <h2 className="font-bold text-2xl md:text-2xl text-slate-950">
              Buy Your eSIM Online
            </h2>
            <p className="font-medium mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
              You can buy your eSIM online, and it’s ready to use in minutes.
            </p>
          </div>

          {/* Step 3 - Positioned over Number 3 */}
          <div className="absolute z-10 top-[20%] left-[75%] md:right-[10%] max-w-[280px] text-center sm:text-left">
            <h2 className="font-bold text-2xl md:text-2xl text-slate-950">
              Activate Instantly
            </h2>
            <p className="font-medium mt-2 text-sm md:text-base text-slate-600 leading-relaxed max-w-[320px] md:max-w-[350px]">
              {" "}
              There is no wait or paperwork. Just click buy now, and you will
              receive a QR code in your e-mail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
