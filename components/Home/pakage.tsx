import Link from "next/link";

const Package = () => {
  return (
    <div>
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        {/* Heading Section Banner */}
        <div className="bg-[#fef7f2] p-6 mt-10 rounded-3xl w-full max-w-[1260px] mx-auto min-h-32 sm:h-56 flex items-center justify-center">
          <h1 className="font-semibold text-2xl sm:text-5xl text-center text-slate-900 leading-tight">
            Full Coverage With the Best Prepaid{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#f17a96]">USA</span> eSIM Plans
          </h1>
        </div>

        {/* Steps Section Container */}
        <div className="w-full max-w-[1260px] mx-auto mt-12 sm:mt-16">
          {/* Section Main Title */}
          <h2 className="font-semibold text-3xl sm:text-5xl text-left text-slate-900 leading-tight">
            You can get your <span className="text-[#f34b72]">Phonico</span>
            <br />
            <span className="mt-2 block">eSIM in 3 easy steps!</span>
          </h2>
        </div>

        {/* 
          Steps Content Area: 
          - Mobile/Tablet par grid flow chalega (md:hidden)
          - Desktop par wahi purana absolute graphic view (md:relative)
        */}
        <div className="w-full max-w-[1400px] mx-auto mt-10 sm:mt-6">
          {/* 1. MOBILE & TABLET LAYOUT (Visible only on screens smaller than MD) */}
          <div className="grid grid-cols-1 gap-8 md:hidden bg-[#faf5f0]/50 p-6 rounded-2xl border border-orange-50">
            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <span className="bg-[#f34b72] text-white font-extrabold rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm text-lg">
                1
              </span>
              <div>
                <h2 className="font-bold text-xl text-slate-950">
                  Choose Your Plan
                </h2>
                <p className="font-medium mt-1 text-sm text-slate-600 leading-relaxed">
                  Select the best eSIM plan that meets your needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start">
              <span className="bg-[#5cbfea] text-white font-extrabold rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm text-lg">
                2
              </span>
              <div>
                <h2 className="font-bold text-xl text-slate-950">
                  Buy Your eSIM Online
                </h2>
                <p className="font-medium mt-1 text-sm text-slate-600 leading-relaxed">
                  You can buy your eSIM online, and it’s ready to use in
                  minutes.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <span className="bg-[#EE5E7F] text-white font-extrabold rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm text-lg">
                3
              </span>
              <div>
                <h2 className="font-bold text-xl text-slate-950">
                  Activate Instantly
                </h2>
                <p className="font-medium mt-1 text-sm text-slate-600 leading-relaxed">
                  There is no wait or paperwork. Just click buy now, and you
                  will receive a QR code in your e-mail.
                </p>
              </div>
            </div>
          </div>

          {/* 2. DESKTOP LAYOUT (Hidden on mobile/tablet, starts at md breakpoint) */}
          <div className="hidden md:block relative w-full min-h-[600px] lg:min-h-[650px]">
            {/* Background Image */}
            <img
              src="/stepsBg.svg"
              alt="Steps Background"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
            />

            {/* Step 1 - Left / Bottom-ish area */}
            <div className="absolute z-10 top-[75%] left-[8%] max-w-[280px]">
              <h2 className="font-bold text-2xl text-slate-950">
                Choose Your Plan
              </h2>
              <p className="font-medium mt-2 text-sm text-slate-600 leading-relaxed">
                Select the best eSIM plan that meets your needs.
              </p>
            </div>

            {/* Step 2 - Center / Middle area */}
            <div className="absolute z-10 top-[50%] left-[43%] max-w-[280px]">
              <h2 className="font-bold text-2xl text-slate-950">
                Buy Your eSIM Online
              </h2>
              <p className="font-medium mt-2 text-sm text-slate-600 leading-relaxed">
                You can buy your eSIM online, and it’s ready to use in minutes.
              </p>
            </div>

            {/* Step 3 - Right / Top area */}
            <div className="absolute z-10 top-[15%] right-[5%] max-w-[320px]">
              <h2 className="font-bold text-2xl text-slate-950">
                Activate Instantly
              </h2>
              <p className="font-medium mt-2 text-sm text-slate-600 leading-relaxed">
                There is no wait or paperwork. Just click buy now, and you will
                receive a QR code in your e-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
