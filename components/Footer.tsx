import { footerLinks } from "@constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100  border-t border-gray-100 selection: bg-slate-900 mt-24">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-15 px-6 py-6">
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/car-icon.svg"
              alt="logo"
              width={55}
              height={18}
              className="object-contain"
            />
            <h5 className="ml-2 text-xl font-extrabold text-white">
              DriveDeal
            </h5>
          </Link>
          <p className="text-base text-gray-300">
            Drive Deal 2024 All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div className="footer__link" key={index}>
              <h3 className="font-bold text-gray-200">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-400"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 px-6 py-10 sm:px-16">
        <p className="text-base text-gray-300  whitespace-nowrap">
          &copy;2024 Drive Deal. All rights reserved.
        </p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-400 whitespace-nowrap">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-400 whitespace-nowrap">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
