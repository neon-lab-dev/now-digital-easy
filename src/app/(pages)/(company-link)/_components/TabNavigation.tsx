import Link from "next/link";

const TabNavigation = () => {
  return (
    <div className="h-fit w-full md:w-auto overflow-hidden">
      <div className="flex gap-2 overflow-x-auto md:flex-col md:w-[275px]">
        {[
          {
            label: "About Us",
            href: "/about-us",
          },
          {
            label: "Contact Us",
            href: "/contact-us",
          },
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
          },
          {
            label: "Refund Policy",
            href: "/refund-policy",
          },
          {
            label: "Payment Option",
            href: "/payment-option",
          },
          {
            label: "Usage Temps",
            href: "/usage-temps",
          },
        ].map((tab) => (
          <Link key={tab.href} href={tab.href} className="min-w-fit">
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
