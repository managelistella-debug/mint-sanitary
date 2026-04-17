import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Mint Sanitary",
  description: "Terms and conditions for using Mint Sanitary services in Metro Vancouver.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing our website or engaging Mint Sanitary for any service, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.",
    ],
  },
  {
    title: "Our Services",
    content: [
      "Mint Sanitary provides professional strata, commercial, and residential cleaning services throughout Metro Vancouver and the Fraser Valley.",
      "All services are subject to availability in your area. Contact us to confirm coverage for your specific location.",
    ],
  },
  {
    title: "Quotes and Pricing",
    content: [
      "All quotes provided are free of charge and non-binding until confirmed in writing by both parties. Final pricing may vary based on the size of the property, frequency of service, and specific requirements discussed during the quoting process.",
      "We reserve the right to adjust pricing with reasonable advance notice if the scope of work changes significantly from the original quote.",
    ],
  },
  {
    title: "Cancellations and Rescheduling",
    content: [
      "We require a minimum of 24 hours notice for any cancellation or rescheduling request. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.",
      "Mint Sanitary reserves the right to reschedule a service due to unforeseen circumstances (such as equipment issues or extreme weather). We will provide as much notice as possible in these cases.",
    ],
  },
  {
    title: "Access to Property",
    content: [
      "You agree to provide safe and reasonable access to the property at the scheduled service time. If a cleaner cannot gain access to the property, the visit may be treated as a late cancellation.",
      "For strata properties, it is your responsibility to obtain any required authorization or access arrangements before the scheduled service.",
    ],
  },
  {
    title: "Satisfaction and Claims",
    content: [
      "We stand behind the quality of our work. If you are not satisfied with a service, please notify us within 24 hours of the visit and we will arrange a re-clean of the affected areas at no additional charge.",
      "Mint Sanitary is not liable for pre-existing damage to property, fixtures, or surfaces. Claims for damage must be reported within 24 hours of the service visit.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, Mint Sanitary's liability for any claim arising from our services is limited to the cost of the service provided.",
      "We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website — including text, images, logos, and design — is the property of Mint Sanitary and may not be reproduced, distributed, or used without our express written permission.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about these Terms of Service, please contact us:",
      "Email: hello@mintsanitary.com\nPhone: 604-123-4567\nService Area: Metro Vancouver, BC",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "77px" }}>

        {/* Header */}
        <section className="bg-[#253862] py-[60px] md:py-[80px]">
          <div className="px-4 sm:px-8 md:px-[60px] max-w-[900px] mx-auto">
            <h1 className="font-display text-[32px] sm:text-[44px] leading-[1.15] text-white uppercase">
              Terms of Service
            </h1>
            <p className="font-body font-medium text-[15px] text-white/55 mt-[10px]">
              Last updated: February 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-[60px] md:py-[80px] bg-[#f2f2f2]">
          <div className="px-4 sm:px-8 md:px-[60px] max-w-[900px] mx-auto flex flex-col gap-[48px]">

            {/* Intro */}
            <p className="font-body font-medium text-[16px] text-[#0a2540] leading-[28px]">
              These Terms of Service govern your use of the Mint Sanitary website and your engagement with our cleaning services. Please read them carefully before booking a service.
            </p>

            {/* Sections */}
            {sections.map((s, i) => (
              <div key={s.title} className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[14px]">
                  <span className="font-body font-extrabold text-[13px] text-[#155da6] bg-[#c8e0fd] rounded-full w-[28px] h-[28px] flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h2 className="font-display text-[20px] sm:text-[24px] leading-[1.2] text-[#253862] uppercase">
                    {s.title}
                  </h2>
                </div>
                <div className="flex flex-col gap-[12px] pl-[42px]">
                  {s.content.map((para, j) => (
                    <p
                      key={j}
                      className="font-body font-medium text-[15px] text-[#0a2540] leading-[26px] whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
