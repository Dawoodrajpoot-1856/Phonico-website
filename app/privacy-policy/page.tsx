"use client";
import React from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";

const Page = () => {
  const sections = [
    {
      title: "Privacy Policy",
      date: "Last Updated: April 7, 2023",
      paragraphs: [
        `The phonico.com website (this “Site”) and the Phonico service are provided by Phonico, LLC. The following sets forth the Privacy Policy (“Privacy Policy”) of Phonico, LLC and its affiliated companies (collectively, “Phonico Mobile,” “we,” “us” or “our”) with respect to information collected through the Site or otherwise from Phonico customers, and is incorporated into and made a part of the Phonico Plans Terms and Conditions, available at https://phonico.com/mobile-plans-terms-and-conditions, the Phonico Terms of Use, available at https://phonico.com/site-terms-of-use, and the Mobile Application End User License Agreement, available at https://phonico.com/app-end-user-license-agreement/. This Privacy Policy describes how information about you is collected, used and disclosed by us when you sign up for and use the Phonico Mobile service and it provides other important privacy information, describes when and how we may change this Privacy Policy, and tells you how to contact us with any questions or comments.`,
      ],
    },
    {
      title: "1: Purpose of Privacy Policy",
      paragraphs: [
        `The phonico.com website (this “Site”) and the Phonico service are provided by Phonico, LLC. This section explains why we collect your information and how it is used to provide the services.`,
      ],
    },
    {
      title: "2: Collection and Use of Personal Information",
      paragraphs: [
        `We collect personal information through the Site or otherwise to provide our services. This includes details like contact information, usage data, and preferences. All information is handled according to applicable laws and our terms.`,
      ],
    },
    {
      title: "4: Security",
      paragraphs: [
        `We implement administrative, technical, and physical security measures to protect your personal information against unauthorized access, disclosure, or destruction.`,
      ],
    },
    {
      title: "Privacy tools and choices",
      paragraphs: [
        `For CCPA related requests, call (484)746-6426. Phonico will confirm receipt of the request within 10 days via the email address you provided.`,
      ],
    },
  ];

  return (
    <>
      {" "}
      <Header />
      <div className=" max-w-[1300px] mx-auto min-h-screen">
        {/* max-w-5xl ko badal kar max-w-full kiya hai taake 1300px width use ho */}
        <main className="max-w-full px-6 md:px-10 py-10 space-y-10">
          {sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h1 className="font-bold text-4xl">{section.title}</h1>
              {section.date && (
                <p className="text-lg font-semibold">{section.date}</p>
              )}
              {section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-semibold text-gray-700 leading-relaxed"
                >
                  {para}
                  Your privacy is important to Phonico. Accordingly, Phonico
                  provides these policies so that you understand how Phonico
                  collects, uses and, in certain circumstances, discloses the
                  information that you provide and/or that is automatically
                  provided to Phonico as a result of your visiting and using the
                  Site or purchasing or using Phonico products or services. This
                  Privacy Policy also explains the steps Phonico has taken to
                  secure your personal information. Finally, this Privacy Policy
                  explains your options regarding the collection, use and
                  disclosure of your personal information. By visiting this Site
                  or purchasing or using any Phonico product or service, you
                  accept the practices described in this Privacy Policy. Phonico
                  is not responsible for the content or privacy practices on any
                  third-party website that may be linked to or from this Site.
                  Any questions regarding this Privacy Policy should be directed
                  to our customer service department at (484)746-6426 .
                </p>
              ))}
            </section>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Page;
