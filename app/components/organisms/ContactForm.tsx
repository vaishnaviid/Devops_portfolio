'use client';

import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  contact?: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);

    const data: FormData = {
      fullName: form.get("fullName") as string,
      email: form.get("email") as string,
      contact: form.get("contact") as string,
      message: form.get("message") as string,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Something went sideways. Try again?");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-6 p-6 rounded-xl bg-neutral-900 border border-neutral-800 text-center animate-fade-in">
        <h2 className="text-2xl font-semibold text-site-primary mb-2">
          You're awesome. fr. 🙌
        </h2>
        <p className="opacity-80 max-w-xl mx-auto">
          Thanks for taking time to reach out.  
          I’ll hit you back faster than a React hot reload. ⚡
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      {error && <p className="text-red-500">{error}</p>}

      <div>
        <label className="block mb-1 font-medium">Full Name *</label>
        <input
          name="fullName"
          required
          className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-site-primary outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email *</label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-site-primary outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Contact (optional)</label>
        <input
          name="contact"
          className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-800"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-site-primary outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-md text-sm font-medium transition text-white bg-site-primary hover:bg-site-primary/90 disabled:opacity-50 disabled:cursor-not-allowed bg-purple-600 hover:bg-purple-500 border border-gray-700 pointer-events-auto"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}