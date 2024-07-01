import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:tanisha.hegde98@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold font-serif mt-8 text-blue-600">
          Send your query
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="p-4 pr-8 font-bold font-serif text-xl text-slate-700">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="h-16 w-full p-2 mt-2 bg-gray-200 border-2 border-gray-600 rounded-md focus:bg-white hover:bg-gray-100 hover:border-blue-500"
                required
              />
            </div>
            <div className="p-4 pr-8 font-bold font-serif text-xl text-slate-700">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-16 w-full p-2 mt-2 bg-gray-200 border-2 border-gray-600 rounded-md focus:bg-white hover:bg-gray-100 hover:border-blue-500"
                required
              />
            </div>
            <div className="p-4 pr-8 font-bold font-serif text-xl text-slate-700">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-28 w-full p-2 mt-2 bg-gray-200 border-2 border-gray-600 rounded-md focus:bg-white hover:bg-gray-100 hover:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 px-8 ml-4 mb-4 py-2 rounded-md text-2xl hover:border-2 hover:border-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
