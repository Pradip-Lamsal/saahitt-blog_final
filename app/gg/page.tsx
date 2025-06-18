"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Photography & Videography"
  );
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: "pandits", name: "Pandits", count: 120 },
    { id: "photography", name: "Photography & Videography", count: 6 },
    { id: "makeup", name: "Makeup", count: 10 },
    { id: "event-hosting", name: "Event Hosting", count: 8 },
    { id: "sound-dj", name: "Sound & DJ", count: 4 },
  ];

  const services = [
    {
      id: 1,
      name: "Samir Photography",
      price: 3400,
      category: "photography",
      image: "/image205.png",
    },
    {
      id: 2,
      name: "Manjil Photo Studio",
      price: 3900,
      category: "photography",
      image: "/image204.png",
    },
    {
      id: 3,
      name: "Bright Vision Studio",
      price: 4000,
      category: "photography",
      image: "/image208.png",
    },
    {
      id: 4,
      name: "Maneer Studios",
      price: 2500,
      category: "photography",
      image: "/image207.png",
    },
    {
      id: 5,
      name: "Photographers",
      subtext: "120 available",
      category: "photography",
      featured: true,
      image: "/image6.png",
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredServices = services.filter((service) => {
    const selectedCategoryId = categories.find(
      (cat) => cat.name === selectedCategory
    )?.id;
    return service.category === selectedCategoryId;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <span className="font-semibold">Our Services</span>
          <div className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
            <div className="h-[1px] bg-gray-400 w-64"></div>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-amber-900 mb-1 font-domine">
          Services : From Pandits to Cars
        </h1>
        <p className="text-gray-600">
          We have covered each & every service that you require to provide best
          wedding experience.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category.name
                    ? "bg-amber-500 text-white"
                    : "text-gray-700 hover:text-amber-600"
                }
              `}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        <Link
          href="/services/all"
          className="text-xs text-gray-500 hover:text-amber-600 transition-colors flex items-center gap-1 ml-4"
        >
          View all services <span className="text-sm">↗</span>
        </Link>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {sortedServices.map((service) => {
          const isFeatured = service.featured === true;

          return (
            <div
              key={service.id}
              className={`
                relative overflow-hidden cursor-pointer border border-gray-100 hover:border-gray-200 transition-all duration-300
                ${
                  isFeatured
                    ? "col-span-1 bg-gray-800 text-white h-[300px] w-full"
                    : "h-[300px] p-2"
                }
              `}
            >
              {/* Image Section */}
              <div
                className={`
                  relative w-full overflow-hidden
                  ${isFeatured ? "h-[220px]" : "h-[220px] rounded-2xl"}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>

                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />

                {!isFeatured && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(service.id);
                    }}
                    className="absolute top-3 right-3 z-20 bg-white p-1.5 rounded-full shadow-sm hover:shadow"
                  >
                    {favorites.includes(service.id) ? (
                      <HeartIconSolid className="h-5 w-5 text-red-500" />
                    ) : (
                      <HeartIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                )}
              </div>

              {/* Text Section */}
              <div className={`p-4 ${isFeatured ? "bg-gray-800" : "bg-white"}`}>
                <h3
                  className={`
                    font-domine
                    ${
                      isFeatured
                        ? "font-semibold text-lg text-white"
                        : "font-medium text-gray-800"
                    }
                  `}
                >
                  {service.name}
                </h3>

                {isFeatured ? (
                  <p className="text-sm text-gray-300">{service.subtext}</p>
                ) : (
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs text-gray-500">From</span>
                    <span className="text-base font-semibold text-amber-600">
                      Rs. {service.price?.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
