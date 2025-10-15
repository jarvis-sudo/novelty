{/*
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
      
      <header className="bg-orange-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto">Get in touch for manufacturing inquiries, partnerships, or general questions.</p>
      </header>

    
      <section className="py-12 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Corporate Office</h2>
            <p>Pxxxxx<br />Industrial Area<br />Telangana 507002</p>
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

      
      <footer className="bg-gray-800 text-gray-200 py-6 text-center">
        Thank you for connecting with Novelty Lifesciences Pvt. Ltd.
      </footer>
    </div>
  );
}

*/}

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted: ' + JSON.stringify(form));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Form */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Leave Us Message</h1>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-red-600 text-white px-8 py-3 rounded font-semibold hover:bg-red-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>

          {/* Right Column - Address */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Address</h1>
              <div className="w-16 h-1 bg-red-600"></div>
            </div>

            <div className="space-y-8">
              {/* Corporate Office */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Corp. Office:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hyderabad,India
                  </p>
                </div>
              </div>

              {/* Factory Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Factory Address:</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hyderabad, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-800">+91-999999999</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <a href="mailto:sales@noveltylifesciences.om" className="text-gray-800 hover:text-red-600 transition-colors">
                    sales@noveltylifesciences.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
