import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Implement submission logic (API/email service)
    alert('Form submitted: ' + JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header className="bg-orange-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto">Get in touch for manufacturing inquiries, partnerships, or general questions.</p>
      </header>

      {/* Contact & Form Section */}
      <section className="py-12 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Corporate Office</h2>
            <p>Pxxxxx<br />Industrial Area<br />Telangana 134113</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Factory</h2>
            <p>xxxxxxx<br />xxxxx</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Details</h2>
            <p className="mt-1">📞 +91‑99999999</p>
            <p className="mt-1">✉️ <a href="mailto:vineet@noveltylifesciences.in" className="text-blue-600 underline">sales@noveltylifesciences.in</a></p>
          </div>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          {['name', 'email', 'phone'].map(field => (
            <div key={field} className="mb-4">
              <label className="block text-gray-700 icon-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                required
                value={form[field]}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6 text-center">
        Thank you for connecting with Novelty Lifesciences Pvt. Ltd.
      </footer>
    </div>
  );
}
