import React from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";

const Page = () => {
  return (
    <>
      <Header />
      <div className=" max-w-[1300px] mx-auto min-h-screen">
        <div className="max-w-full mx-auto px-8 py-10">
          <h1 className="text-4xl font-semibold text-center mb-10">
            Phonico Terms of Use
          </h1>

          <p className="text-base mb-6">
            Thank you for choosing Phonico. By using our services, you agree to
            comply with the terms outlined in this document. These Terms of Use
            constitute a binding agreement between you and Phonico, LLC
            ("Phonico," "we," "us," or "our"). Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold mt-8">1. Service Agreement</h2>
          <p className="text-base font-semibold mt-2">
            By using Phonico services, you agree to abide by these Terms of Use,
            including our Fair Use Policy, Privacy Policy, and Acceptable Use
            Guidelines. Failure to comply may result in service suspension or
            termination.
          </p>

          <h2 className="text-2xl font-bold mt-8">2. Fair Use Policy</h2>
          <p className="text-base font-semibold mt-2">
            Phonico’s Fair Use Policy ensures service quality for all customers.
            Each billing cycle includes up to 2,000 voice minutes and 2,000 SMS
            messages. Wi-Fi Calling is limited to 1,000 minutes per cycle. Usage
            materially beyond these limits may lead to temporary service
            restrictions or additional charges.
          </p>

          <h2 className="text-2xl font-bold mt-8">
            3. Acceptable Use Guidelines
          </h2>

          <h3 className="text-xl font-bold mt-4">3.1 Personal Use Only</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Services are for individual, non-commercial use.</li>
            <li>
              Unauthorized resale, sharing, or commercial exploitation is
              prohibited.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-4">3.2 Prohibited Activities</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Telemarketing, mass texting, or robocalls.</li>
            <li>
              Any activity that could harm the network performance or integrity.
            </li>
            <li>Illegal or fraudulent use of the service.</li>
            <li>
              Use of the service in ways that violate applicable laws or
              regulations.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-4">3.3 Data and SMS Usage</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Data and messaging usage must align with fair usage policies.
            </li>
            <li>
              Data-heavy activities such as continuous streaming or downloads
              may lead to bandwidth restrictions.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">
            4. Account Responsibilities
          </h2>
          <h3 className="text-xl font-bold mt-4">4.1 Security</h3>
          <p className="text-base font-semibold mt-2">
            Users must maintain the confidentiality of their account credentials
            and notify Phonico immediately in case of unauthorized access.
          </p>
          <h3 className="text-xl font-bold mt-4">4.2 Account Modifications</h3>
          <p className="text-base font-semibold mt-2">
            Users may manage their service plans via the official Phonico
            website or by contacting customer support.
          </p>

          <h2 className="text-2xl font-bold mt-8">5. Service Availability</h2>
          <p className="text-base font-semibold mt-2">
            Coverage, performance, and network availability may be impacted by
            various external factors such as weather, terrain, or congestion.
            Phonico does not guarantee uninterrupted service.
          </p>

          <h2 className="text-2xl font-bold mt-8">6. Billing and Payments</h2>
          <p className="text-base font-semibold mt-2">
            Customers agree to pay for services as outlined in their selected
            plans. Late payments may result in service suspension or additional
            fees. Applicable taxes and regulatory fees will be added to the
            total bill.
          </p>

          <h2 className="text-2xl font-bold mt-8">7. Privacy Policy</h2>
          <p className="text-base font-semibold mt-2">
            We prioritize your privacy. Please review our Privacy Policy to
            learn how we collect, use, and protect your data.
          </p>

          <h2 className="text-2xl font-bold mt-8">8. Dispute Resolution</h2>
          <p className="text-base font-semibold mt-2">
            By using Phonico services, you agree to resolve disputes through
            binding arbitration in Orange County, Florida, waiving your right to
            a jury trial.
          </p>

          <h2 className="text-2xl font-bold mt-8">9. Contact Us</h2>
          <p className="text-base font-semibold mt-2">Phone: (484) 746-6426</p>
          <p className="text-base font-semibold mt-1">
            Email: support@phonico.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
