import React from "react";
import Link from "next/link"; // Use "react-router-dom" if in React

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const companyInfo = {
    logo: "/images/transpeedogo.webp",
    name: "Transpeed Cargo Pvt. Ltd.",
    officeAddress: "AD - 7E, Pitampura, Delhi 110034",
    registeredAddress: "K-18, 1st Floor, Navin Shahdara, Delhi 110032",
    email: "contact@transpeed.in",
    phone: "+91 9354382988",
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
  ];

  const footerLinks = [
    {
      title: "Useful Links",
      links: ["Home", "About Us", "Services", "Global Privilege", "Contact Us", "Gallery", "Career"],
    },
    {
      title: "Logistics Services",
      links: ["Air Freight", "SEA Freight", "Road Transportation", "Warehousing", "Custom Clearance", "Rail Transport"],
    },
    {
      title: "Support",
      links: ["Privacy Policy", "Terms & Conditions", "Book An Appointment", "Support", "Blog","FAQs"],
    },
  ];

  return (
    <footer className="bg-[url('/images/footer-bg.webp')] bg-cover bg-center text-gray-900 pt-20 pb-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding & Contact */}
        <div className="rounded-2xl">
          <img src={companyInfo.logo} alt="Company Logo" className="w-[180px]" />
          <h2 className="text-lg text-yellow-500 font-bold mt-4">{companyInfo.name}</h2>
          <p className="text-md text-white"><strong>Office Address:</strong> {companyInfo.officeAddress}</p>
          <p className="text-md text-white"><strong>Registered Address:</strong> {companyInfo.registeredAddress}</p>
          <p className="text-md mt-2 text-white">
            Email: <a href={`mailto:${companyInfo.email}`} className="text-[#fff] font-bold">{companyInfo.email}</a>
          </p>
          <p className="text-md text-white">
            Call: <a href={`tel:${companyInfo.phone}`} className="text-[#fff] font-bold">{companyInfo.phone}</a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-100">
            {socialLinks.map((item, index) => (
              <a key={index} href={item.href} className="cursor-pointer text-2xl bg-[#01385e] w-[30px] h-[30px] p-2 hover:text-yellow-500 rounded-full flex items-center justify-center">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Sections */}
        {footerLinks.map((section, index) => (
          <div key={index} className="rounded-2xl">
            <h3 className="font-bold text-yellow-400 text-2xl">{section.title}</h3>
            <ul className="text-md mt-2 space-y-1 text-white">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={`/${link.toLowerCase().replace(/ /g, "-")}`} className="hover:text-yellow-400 transition duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="border-t-2 border-gray-100 mt-8 pt-4 text-center text-sm text-gray-100">
        <p>
          Copyright © 2025. {companyInfo.name} | All Rights Reserved. | Managed By Hover Business Services LLP.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
