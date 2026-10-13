import { getGuestPlans } from "@/services/plans.services";
import PackagesList from "./PakagesList";

const Packages = async () => {
  const getPlans = await getGuestPlans();
  const plans = Array.isArray(getPlans) ? getPlans : [];

  return (
    <section
      className="w-full max-w-[1270px] mx-auto py-16 bg-cover bg-center bg-no-repeat mt-10 overflow-hidden"
      style={{
        backgroundImage: "url('https://phonico.com/images/wavyBlob.svg')",
      }}
    >
      <div className="max-w-[1330px] mx-auto">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center text-gray-900 leading-tight">
          Buy the Best eSIM Prepaid Plans Meeting All Your{" "}
          <br className="hidden md:inline" />{" "}
          <span className="text-[#ec3c65] mt-2 block">Expectations! </span>
        </h1>

        <PackagesList plans={plans} />
      </div>
    </section>
  );
};

export default Packages;
