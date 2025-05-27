import React from "react";
import FourthtempImg from "../assets/Images/Fourthtempimg_1.png";

const FourthTemplate = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-br from-green-100 via-white to-green-200">
      {/* Benefits Section */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What Benefit Will You Get
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg max-w-md">
            <li>Free Consulting With Expert Saving Money</li>
            <li>Online Banking</li>
            <li>Investment Report Every Month</li>
            <li>Saving Money For The Future</li>
            <li>Online Transaction</li>
          </ul>
        </div>

        {/* Spacer for desktop */}
        <div className="hidden md:block"></div>

        <div className="flex justify-center md:justify-end">
          <img
            src={FourthtempImg}
            alt="Benefits Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Plan Selection */}
      <div className="container mx-auto max-w-4xl text-center py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Choose Plan That<span className="text-green-600">'</span>s Right For
          You
        </h2>
        <p className="mb-6 text-gray-600 text-lg">
          Choose the plan that works best for you, feel free to contact us
        </p>

        <div className="inline-flex rounded-lg shadow-lg overflow-hidden border border-gray-300">
          <button className="px-6 py-3 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition">
            Bill Monthly
          </button>
          <button className="px-6 py-3 bg-green-500 text-white font-semibold hover:bg-green-600 transition">
            Bill Yearly
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="border rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300">
          <h4 className="text-xl font-semibold mb-2">Free</h4>
          <p className="mb-2 text-gray-600">
            Have a go and test your superpowers
          </p>
          <p className="text-4xl font-bold mb-4">
            <sup className="text-lg">$</sup>0
          </p>
          <ul className="mb-6 space-y-2 text-left w-full max-w-xs">
            <li>✔ 4 Users</li>
            <li>✔ 2 Files</li>
            <li>✔ Public Share & Comments</li>
            <li>✔ Chat Support</li>
            <li>✔ New income apps</li>
          </ul>
          <button className="rounded px-6 py-2 bg-white text-green-500 font-bold shadow-lg hover:shadow-green-400 hover:scale-105 transition">
            Signup for Free
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-green-300 border rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-[1.05] transition-transform duration-300">
          <h4 className="text-xl font-semibold mb-2">Pro</h4>
          <p className="mb-2 text-gray-800">
            Experience the power of infinite possibilities
          </p>
          <p className="text-4xl font-bold mb-4">
            <sup className="text-lg">$</sup>8
          </p>
          <ul className="mb-6 space-y-2 text-left w-full max-w-xs bg-white p-4 rounded shadow-inner">
            <li>✔ 4 Users</li>
            <li>✔ All apps</li>
            <li>✔ Unlimited editable exports</li>
            <li>✔ Folders and collaboration</li>
            <li>✔ All incoming apps</li>
          </ul>
          <button className="rounded px-6 py-2 bg-green-500 text-white font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition">
            Go for Pro
          </button>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300">
          <h4 className="text-xl font-semibold mb-2">Business</h4>
          <p className="mb-2 text-gray-600">
            Unveil new superpowers and join the Design League
          </p>
          <p className="text-4xl font-bold mb-4">
            <sup className="text-lg">$</sup>16
          </p>
          <ul className="mb-6 space-y-2 text-left w-full max-w-xs">
            <li>✔ All the features of pro plan</li>
            <li>✔ Account success Manager</li>
            <li>✔ Single Sign-On (SSO)</li>
            <li>✔ Co-conception program</li>
            <li>✔ Collaboration - Soon</li>
          </ul>
          <button className="rounded px-6 py-2 bg-white text-green-500 font-bold shadow-lg hover:shadow-green-400 hover:scale-105 transition">
            Go to Business
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthTemplate;
