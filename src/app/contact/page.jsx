"use client"
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-primary py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-secondary mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-3 border border-secondary rounded-md text-secondary"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-3 border border-secondary rounded-md text-secondary"
        />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="p-3 border border-secondary rounded-md text-secondary"
        />
        <button type="submit" className="bg-accent text-white py-3 px-6 rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
}
