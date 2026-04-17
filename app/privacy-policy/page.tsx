import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Mint Sanitary",
  description: "How Mint Sanitary collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you submit our contact form, we collect the information you provide: your name, email address, phone number, city, service type, and any message you include.",
      "We do not collect any additional personal information beyond what you voluntarily provide.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information you provide solely to respond to your inquiry, prepare a service quote, communicate about scheduling, and deliver the cleaning services you request.",
      "We will not use your information for marketing purposes without your consent.",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to any third parties.",
      "We may use trusted service providers (such as an email delivery service) to facilitate communications on our behalf. These providers are contractually obligated to handle your data securely and only for the purpose of delivering those communications.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. Our website uses industry-standard security practices.",
      "While we strive to protect your information, no method of internet transmission is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses basic browser cookies to support standard website functionality. We do not use tracking cookies, advertising cookies, or any third-party analytics cookies that identify you personally.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to request access to the personal information we hold about you, request corrections to that information, or request that we delete it.",
      "To exercise any of these rights, please contact us using the details below.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:",
      "Email: hello@mintsanitary.com\nPhone: 604-123-4567\nService Area: Metro Vancouver, BC",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "77px" }}>

        {/* Header */}
        <section className="bg-[#253862] py-[60px] md:py-[80px]">
          <div className="px-4 sm:px-8 md:px-[60px] max-w-[900px] mx-auto">
            <h1 className="font-display text-[32px] sm:text-[44px] leading-[1.15] text-white uppercase">
              Privacy Policy
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
              Mint Sanitary is committed to protecting your privacy. This policy explains what personal information we collect, how we use it, and how we keep it safe. By using our website or services, you agree to the practices described here.
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
