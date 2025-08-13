import { SendHorizontal } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-white rounded-2xl shadow-sm p-8 md:p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-6">
          <div>
            <p className="text-[#003084] text-2xl mb-2 font-bold">Contact us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Need help ? Get in touch
            </h2>
            <p className="text-gray-600 mt-4">
              We'd love to hear from you. Please fill out this form.
            </p>
          </div>

          <form className="space-y-6 mt-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-left">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-[#1018280D] placeholder:text-[#7985A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-[#1018280D] placeholder:text-[#7985A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-[#1018280D] placeholder:text-[#7985A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write Your Message"
                className="w-full px-4 py-3 bg-[#1018280D] placeholder:text-[#7985A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2  bg-[#003084] hover:bg-[#003084] text-[#ffc326] px-7 py-4 rounded-[15px] cursor-pointer"
            >
              Get Free Quote
              <SendHorizontal className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
