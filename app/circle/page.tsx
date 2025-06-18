"use client";

import Image from "next/image";

export default function Test() {
  return (
    <>
      {/* setup screen / container */}
      <div className="w-full bg-[#F6AE2D] rounded-b-[40px] relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start justify-between gap-16">
          {/* div below will have the text of the left side */}
          <div className="max-w-xl space-y-6">
            <p className="text-lg font-medium font-domine text-[#3E2C1C]">
              Grow Your Business with Saahit – The Ultimate vendor Marketplace
            </p>
            <h1 className="text-4xl md:text-4xl font-bold font-domine text-[#3E2C1C] leading-tight">
              Become a Vendor on Saahit – Connect with Clients & Grow Your
              Business
            </h1>
            <p className="text-[#3E2C1C] text-base leading-relaxed">
              It’s a one-stop platform for all event service providers. Whether
              you run a venue for corporate events, a wedding photography
              business, or a makeup studio, we connect you with clients actively
              searching for your services.
            </p>
            {/* now the div below will have buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white font-domine font-semibold text text-[#3E2C1C] px-6 py-3 rounded-full shadow">
                Become our vendor
              </button>
              <button className="text-[#3E2C1C] font-semibold font-domine">
                Login as Vendor
              </button>
            </div>
          </div>

          {/* the div below will contain all the things to mention on right side of the container */}
          <div className="relative w-[450px] h-[450px] flex items-center justify-center">
            {/* White circle background */}
            <div className="absolute w-[160px] h-[160px] rounded-full bg-white z-10"></div>

            {/* Logo inside the circle */}
            <div className="absolute w-28 h-28 z-20">
              <Image
                src="/Logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Top service */}

            <div className="absolute top-1 w-fit">
              <div className="px-4 py-1.5 mt-4 bg-[#f9d796] rounded-full text-sm font-domine text-[#3E2C1C] shadow-sm whitespace-nowrap">
                Caterers & Food Services
              </div>
            </div>
            <div className="absolute top-[60px] mx-36 h-[80px] border-r-2 border-dashed border-white flex items-center justify-start">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 bg-white rounded-full"></span>
            </div>

            {/* Top Right service */}
            <div className="absolute top-[29%] -right-47">
              <div className="px-4 py-1 bg-[#f9d796] rounded-full text-sm font-domine text-[#3E2C1C] shadow-sm whitespace-nowrap">
                Photographers & Videographers
              </div>
            </div>
            <div className="absolute top-[35%] right-12 w-28 border-t-2 border-dashed border-white -rotate-12 flex items-center">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 size-2 bg-white rounded-full"></span>
            </div>

            {/* Bottom Right service */}
            <div className="absolute bottom-[21%] -right-38">
              <div className="px-5 py-1.5 bg-[#f9d796] rounded-full text-sm font-domine text-[#3E2C1C] shadow-sm whitespace-nowrap">
                Makeup & Beauty Artists
              </div>
            </div>
            <div className="absolute bottom-[35%] right-10 w-44 border-t-2 border-dashed border-white rotate-30 flex items-center">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 size-2 bg-white rounded-full"></span>
            </div>

            {/* Bottom service */}
            <div className="absolute inset-x-0 -bottom-6 mx-auto w-fit">
              <div className="px-5 py-1.5 bg-[#f9d796] rounded-full text-sm font-domine text-[#3E2C1C] shadow-sm whitespace-nowrap">
                Entertainment & Music
              </div>
            </div>
            <div className="absolute bottom-[20px] h-[120px] w-26 mr-26 border-r-2 border-dashed border-white flex items-center">
              <span className="absolute bottom-0 left-25.5 -translate-x-1/2 size-2 bg-white rounded-full"></span>
            </div>

            {/* Bottom Left service */}
            <div className="absolute bottom-[25%] -left-16">
              <div className="px-5 py-1.5 bg-[#f9d796] rounded-full text-sm font-domine text-[#3E2C1C] shadow-sm whitespace-nowrap">
                Event Decorators
              </div>
            </div>
            <div className="absolute bottom-[35%] left-20 w-24 border-t-2 border-dashed border-white -rotate-35 flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 size-2 bg-white rounded-full"></span>
            </div>

            {/* Top Left service */}
            <div className="absolute top-[28%] -left-8">
              <div className="px-5 py-1.5 bg-[#f9d796] rounded-full text-sm font-domine text-[#3E2C1C] shadow-sm whitespace-nowrap">
                Venues
              </div>
            </div>
            <div className="absolute top-[35%] left-[13%] w-24 border-t-2 border-dashed border-white rotate-15 flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 size-2 bg-white rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
      {/* section below the hero that says We are a family of */}
      <div className="w-full bg-[#FEC86A] rounded-b-[40px] py-10 relative -mt-20 z-0">
        <div className="max-w-4xl mx-auto text-center pt-24">
          <p className="text-lg font-domine text-[#3E2C1C] mb-8">
            We are a family of
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-[#3E2C1C] font-domine">
            <div className="text-center">
              <p className="text-3xl font-bold">270+</p>
              <p className="text-base mt-2">Vendors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">75+</p>
              <p className="text-base mt-2">Venues</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">34+</p>
              <p className="text-base mt-2">Makeup Artists</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">27+</p>
              <p className="text-base mt-2">Photographers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
