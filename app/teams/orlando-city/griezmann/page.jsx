'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Griezmann = () => {
  const items = [
       {
      title:
        "Men's Orlando City SC Antoine Griezmann adidas Purple 2025 Perfect Storm On-Field Authentic Jersey",
      price: '$194.99',
      imageUrl:
        'https://images.footballfanatics.com/orlando-city-sc/mens-adidas-antoine-griezmann-purple-orlando-city-sc-2025-perfect-storm-on-field-authentic-jersey_ss5_p-204033026+pv-1+u-hexo5oxtaqxkxng71go3+v-4wipfo65ii5bhl5wjrot.png?_hv=2&w=1018',
      link: 'https://mlsstore.i8h2.net/PzdYnN',
    },
    {
      title:
        "Men's Orlando City SC Antoine Griezmann adidas Yellow 2026 Sunken Treasure Kit Replica Jersey",
      price: '$134.99',
      imageUrl:
        'https://images.footballfanatics.com/orlando-city-sc/mens-adidas-antoine-griezmann-yellow-orlando-city-sc-2026-sunken-treasure-kit-replica-jersey_ss5_p-204033023+pv-1+u-n9kp1xxxujkydfq3meoa+v-w4cfrmomzn7dim5t6r02.png?_hv=2&w=1018',
      link: 'https://mlsstore.i8h2.net/k42QA3',
    },
    {
      title:
        "Men's Orlando City SC Antoine Griezmann adidas Red 2026 Archive Replica Jersey",
      price: '$135.00',
      imageUrl:
        'https://images.footballfanatics.com/orlando-city-sc/mens-adidas-antoine-griezmann-red-orlando-city-sc-2026-archive-replica-jersey_ss5_p-204600073+pv-1+u-u6skosftznetmhb76rv5+v-fhdqe5sbosve4r2r84jd.png?_hv=2&w=1018',
      link: 'https://mlsstore.i8h2.net/9VdxBj',
    },
    // {
    //   title:
    //     "Men's Orlando City SC Antoine Griezmann Purple Authentic Name & Number T-Shirt",
    //   price: '$44.99',
    //   imageUrl:
    //     'https://images.footballfanatics.com/orlando-city-sc/mens-orlando-city-sc-antoine-griezmann-purple-authentic-name-number-t-shirt.jpg?_hv=2&w=340',
    //   link: 'https://www.mlsstore.com/orlando-city-sc/',
    // },
    // {
    //   title:
    //     "Men's Orlando City SC Antoine Griezmann adidas Red 2026 Archive On-Field Authentic Jersey",
    //   price: '$205.00',
    //   imageUrl:
    //     'https://images.footballfanatics.com/orlando-city-sc/mens-adidas-antoine-griezmann-red-orlando-city-sc-2026-archive-on-field-authentic-jersey.jpg?_hv=2&w=340',
    //   link: 'https://www.mlsstore.com/orlando-city-sc/',
    // },
    // {
    //   title:
    //     "Men's Orlando City SC Antoine Griezmann 500 Level Black Expression T-Shirt",
    //   price: '$39.99',
    //   imageUrl:
    //     'https://images.footballfanatics.com/orlando-city-sc/mens-orlando-city-sc-antoine-griezmann-500-level-black-expression-t-shirt.jpg?_hv=2&w=340',
    //   link: 'https://www.mlsstore.com/orlando-city-sc/',
    // },
  ];

  return (
    <div className="w-full bg-white text-[#020617] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">

        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Antoine Griezmann
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Orlando City SC • France
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://assets.goal.com/images/v3/getty-2294479946/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORRHA4A====/GettyImages-2294479946.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Antoine Griezmann Orlando City SC"
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/2" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm uppercase tracking-widest">
              Getty Images Sport
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Player Information
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Full Name:</strong> Antoine Griezmann
              </li>
              <li>
                <strong>Date of Birth:</strong> March 21, 1991
                (Mâcon, France)
              </li>
              <li>
                <strong>Position:</strong> Forward
              </li>
              <li>
                <strong>Height:</strong> 5 ft 9 in (1.76 m)
              </li>
              <li>
                <strong>Current Team:</strong> Orlando City SC
              </li>
              <li>
                <strong>Shirt:</strong> No. 7 • Designated Player
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Career History
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Real Sociedad (2009–2014):</strong>
                {' '}First-team breakthrough in La Liga
              </li>
              <li>
                <strong>Atlético Madrid (2014–2019, 2021–2026):</strong>
                {' '}Club all-time leading scorer (211 goals)
              </li>
              <li>
                <strong>Barcelona (2019–2021):</strong>
                {' '}La Liga and Copa del Rey
              </li>
              <li>
                <strong>Orlando City SC (2026–present):</strong>
                {' '}8 goals, 3 assists in MLS through mid-September
              </li>
              <li>
                <strong>France:</strong>
                {' '}World Cup winner (2018), Nations League winner
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            About Antoine Griezmann
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Antoine Griezmann joined Orlando City from Atlético Madrid
            in the summer of 2026 on a Designated Player deal through
            2027-28, with an option for 2028-29. The 35-year-old World
            Cup winner wears No. 7. Since his MLS debut on July 23 he
            has been Orlando’s most productive attacker — eight goals
            and three assists, including a brace at Atlanta United and
            the winner against San Diego. Atlético’s all-time leading
            scorer arrived after 10 seasons in Madrid and a spell at
            Barcelona. He is the centerpiece of Orlando’s rebuild after
            the club parted with Óscar Pareja in March.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Shop the Collection
          </h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {items.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-64">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-lg text-[#020617]">
                    {product.title}
                  </h4>

                  <p className="text-xl font-bold mt-2">
                    {product.price}
                  </p>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#020617] mb-2">
              Shop Griezmann merchandise
            </h3>

            <p className="text-gray-600">
              Official Orlando City SC jerseys, apparel and collectibles
              at the MLS Store.
            </p>
          </div>

          <a
            href="https://mlsstore.i8h2.net/MKdojn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap"
          >
            Buy now
          </a>
        </div>

      </div>
    </div>
  );
};

export default Griezmann;