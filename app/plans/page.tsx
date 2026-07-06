"use client";
import { useState, useEffect } from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";
import Link from "next/link";

const Plan = () => {
  const people = [
    {
      name: "Ali Khan",
      work: "UI Designer",
      img: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "Sara Ahmed",
      work: "Frontend Dev",
      img: "https://i.pravatar.cc/300?img=2",
    },
    {
      name: "Usman Tariq",
      work: "Backend Dev",
      img: "https://i.pravatar.cc/300?img=3",
    },
    {
      name: "Ayesha Noor",
      work: "Product Manager",
      img: "https://i.pravatar.cc/300?img=4",
    },
    {
      name: "Bilal Shah",
      work: "Mobile App Dev",
      img: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Hina Iqbal",
      work: "UX Researcher",
      img: "https://i.pravatar.cc/300?img=6",
    },
    {
      name: "Hamza Malik",
      work: "DevOps Engineer",
      img: "https://i.pravatar.cc/300?img=7",
    },
    {
      name: "Zain Raza",
      work: "QA Engineer",
      img: "https://i.pravatar.cc/300?img=8",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const updateVisibleCount = () => {
    if (window.innerWidth < 640) setVisibleCount(1);
    else if (window.innerWidth < 1024) setVisibleCount(2);
    else setVisibleCount(3);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visiblePeople = people.slice(activeIndex, activeIndex + visibleCount);

  const plans = [
    {
      title: "1GB",
      price: "$15/month",
      desc: "1GB Data and Unlimited Talk & Text",
      name: "Quick Start Plan",
      details:
        "Enjoy our basic eSIM plan for a Month of Travel without getting a hole in your Pocket.",
      link: "/plans/1gb-data-and-unlimited-talk-text",
      color: "bg-[#fd577d]",
    },
    {
      title: "3GB",
      price: "$20/month",
      desc: "3GB Data and Unlimited Talk & Text",
      name: "Traveler’s Choice Plan",
      details:
        "Planning another adventure trip? Don’t forget to buy the best eSIM Plan for Staying Connected.",
      link: "/plans/3gb-data-and-unlimited-talk-text",
      color: "bg-[rgb(81,176,253)]",
    },
    {
      title: "5GB",
      price: "$25/month",
      desc: "5GB Data and Unlimited Talk & Text",
      name: "Business Boost Plan",
      details:
        "Rushing to an International Conference for New Business Ventures? Enjoy Hi-Speed Connectivity.",
      link: "/plans/5gb-data-and-unlimited-talk-text",
      color: "bg-[rgb(81,176,253)]",
    },
    {
      title: "10GB",
      price: "$35/month",
      desc: "10GB Data and Unlimited Talk & Text",
      name: "Explorer’s Dream Plan",
      details:
        "Are you a Browsing Addict or an Explorer? Get the best prepaid eSIM Plan that Covers all Your Journey.",
      link: "/plans/10gb-data-and-unlimited-talk-text",
      color: "bg-[rgb(81,176,253)]",
    },
    {
      title: "20GB",
      price: "$50/month",
      desc: "20GB Data and Unlimited Talk & Text",
      name: "Premium Plan",
      details:
        "Enjoy our Going to Sign Deals with the Staff with you? Buy Perfect eSIM Prepaid Plan to Share Data via Hotspot.",
      link: "/plans/20gb-data-and-unlimited-talk-text",
      color: "bg-[rgb(81,176,253)]",
    },
  ];

  const features = [
    {
      img: "/phoneIcon.svg",
      title: "Unlimited Calls & Sms",
      desc: "Phonico wants you to stay connected with your loved ones all the time with no limits on Calls and Sms.",
    },
    {
      img: "/moneybag.svg",
      title: "Variety of Data Plans",
      desc: "Multiple travel eSIM Data plans packages, tailored to your needs so you can stay connected.",
    },
    {
      img: "/speaker.svg",
      title: "Easy Activation Process",
      desc: "Phonico eSIM activation is so easy that anyone can do it. Just Scan the QR code or Activate it from the Phonico eSIM App.",
    },
    {
      img: "/globe (1).svg",
      title: "WirelessSecure Network",
      desc: "Phonico understands your data privacy. We have applied the highest standard of security protocols to avoid any cyber threat.",
    },
  ];

  return (
    <>
      <Header />

      {/* Plans Section */}
      <div className="bg-[#ffe9ee] py-10 px-4 md:px-10">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center px-4">
          Buy the Best eSIM Prepaid Plans Meeting All Your <br />
          <span className="text-[#ec3c65]">Expectations!</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm bg-white rounded-xl shadow-lg p-4 flex flex-col"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
                {plan.title}
              </h1>
              <div
                className={`mt-6 rounded-lg w-full px-4 py-6 text-white text-center ${plan.color}`}
              >
                <h1 className="font-bold text-2xl">{plan.price}</h1>
                <p className="mt-2 text-sm">{plan.desc}</p>
              </div>
              <h1 className="mt-5 text-lg font-semibold text-gray-800 text-center">
                {plan.name}
              </h1>
              <p className="mt-3 text-sm text-gray-600 text-center">
                {plan.details}
              </p>
              <div className="mt-5 space-y-2">
                {[
                  "High-speed internet",
                  "Unlimited talk & text",
                  "High-quality video streaming",
                  "No hidden fees",
                  "No contract (cancel anytime)",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img
                      src="https://phonico.com/images/checkIcon.svg"
                      className="w-4 h-4"
                    />
                    <p className="text-sm">{text}</p>
                  </div>
                ))}
              </div>
              <Link href={plan.link}>
                <button className="mt-5 w-full bg-[#f34b72] hover:bg-[#f33f69] h-10 rounded text-white">
                  View Plan
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="w-full sm:w-64 bg-[#dfdfdfdc] p-4 h-auto rounded-lg flex flex-col items-center"
          >
            <img src={item.img} alt="" className="mt-4" />
            <h1 className="mt-2 font-bold text-center">{item.title}</h1>
            <p className="mt-2 font-semibold text-sm text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* People Slider */}
      <div className="w-full py-20 bg-gray-50 mt-10 px-4">
        <p className="font-semibold text-xl text-center">
          2,157 people have said how good Phonico
        </p>
        <h1 className="font-semibold text-3xl sm:text-5xl text-center mt-4">
          The Love We’ve Earned From Our{" "}
          <span className="text-[#ec3c65]">Users</span>
        </h1>
        <div className="flex justify-center gap-4 transition-all duration-500 flex-wrap md:flex-nowrap mt-10">
          {visiblePeople.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-center w-full sm:w-80 md:w-72"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-28 h-28 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-gray-500 text-sm">{p.work}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {people.map((_, i) => (
            <button
              key={i}
              onClick={() =>
                setActiveIndex(
                  i <= people.length - visibleCount
                    ? i
                    : people.length - visibleCount,
                )
              }
              className={`w-3 h-3 rounded-full transition ${i >= activeIndex && i < activeIndex + visibleCount ? "bg-black scale-110" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Plan;
