'use client';

import { useState, useEffect } from 'react';
import clsx from 'classnames';

type FormShape = {
  fullName: string;
  email: string;
  contact?: string;
  message: string;
};

const DEFAULT = { fullName: '', email: '', contact: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormShape>(DEFAULT);
  const [errors, setErrors] = useState<Partial<Record<keyof FormShape, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  useEffect(() => {
    // optional: prefill from localStorage if you want
  }, []);

  function validate(): boolean {
    const err: Partial<Record<keyof FormShape, string>> = {};
    if (!form.fullName.trim()) err.fullName = 'Full name is required';
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Invalid email';
    if (!form.message.trim()) err.message = 'Message is required';
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (!endpoint) {
      setErrors({ email: 'Form endpoint not configured. See .env.local' });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        'Full Name': form.fullName,
        Email: form.email,
        Contact: form.contact || 'N/A',
        Message: form.message,
        source: typeof window !== 'undefined' ? window.location.href : 'unknown',
      };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        // you could also clear localStorage etc
      } else {
        // Formspree returns errors array sometimes
        setErrors({ message: data?.error || 'Failed to send. Try again later.' });
      }
    } catch (err) {
      setErrors({ message: 'Network error. Try again later.' });
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    // dark cinematic thank-you
    return (
      <div className="mt-6 p-8 rounded-2xl bg-gradient-to-b from-[#0b0b0d] to-[#0f0f12] border border-gray-800 text-center animate-cinematic-in">
        <div className="mx-auto max-w-xl">
          <svg className="mx-auto mb-4 h-16 w-16 text-site-primary" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h3 className="text-2xl font-semibold mb-2 text-site-primary">Message received — cinematic mode ✅</h3>

          <p className="text-sm opacity-80 mb-4">
            Thanks for dropping a line. I’ll read it under the glow of my dual-monitor setup and reply soon — expect a message from me, not a bot.  
          </p>

          <p className="text-xs opacity-60">If you included contact info, I’ll ping you. If not, consider this your friendly nudge to add it next time 😉</p>
        </div>
      </div>
    );
  }

  // Floating-label input markup helper
  const Field = ({
    id,
    label,
    required,
    type = 'text',
    name,
    as = 'input',
  }: {
    id: string;
    label: string;
    required?: boolean;
    type?: string;
    name: keyof FormShape;
    as?: 'input' | 'textarea';
  }) => {
    const value = form[name] ?? '';
    const hasValue = value.toString().length > 0;

    return (
      <div className="relative">
        {/* gradient border wrapper */}
        <div className={clsx(
          'rounded-xl p-[1px] bg-gradient-to-r from-[#914bf1] via-[#7a5cf0] to-[#4fb1f1]',
          'focus-within:shadow-[0_6px_30px_rgba(145,75,241,0.18)] transition-shadow'
        )}>
          <div className="rounded-lg bg-[#0b0b0d] px-3 py-2">
            {as === 'textarea' ? (
              <textarea
                name={id}
                id={id}
                rows={5}
                value={value as string}
                onChange={(e) => setForm((s) => ({ ...s, [name]: e.target.value }))}
                className="peer bg-transparent w-full text-sm outline-none resize-y py-2 placeholder-transparent"
                placeholder={label}
              />
            ) : (
              <input
                id={id}
                name={id}
                type={type}
                value={value as string}
                onChange={(e) => setForm((s) => ({ ...s, [name]: e.target.value }))}
                className="peer bg-transparent w-full text-sm outline-none py-3 placeholder-transparent"
                placeholder={label}
              />
            )}
          </div>
        </div>

        {/* label (modern macOS style) */}
        <label
          htmlFor={id}
          className={clsx(
            'absolute left-4 top-2 pointer-events-none text-sm text-neutral-400 input-label',
            // move/scale when focused or has value
            (hasValue ? 'transform -translate-y-5 scale-90 text-neutral-300' : 'translate-y-0'),
            'peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-neutral-200'
          )}
        >
          {label}{required ? ' *' : ''}
        </label>

        {/* inline error */}
        {errors[name] && (
          <p className="mt-2 text-xs text-red-400">{errors[name]}</p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      <Field id="fullName" name="fullName" label="Full Name" required />
      <Field id="email" name="email" label="Email" required type="email" />
      <Field id="contact" name="contact" label="Contact (optional)" />
      <Field id="message" name="message" label="Message" required as="textarea" />

      {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition',
            loading ? 'opacity-70 cursor-wait' : '',
            'bg-gradient-to-r from-[#914bf1] to-[#4fb1f1] text-black shadow-md'
          )}
        >
          {loading ? 'Sending…' : 'Send Message'}
        </button>

        <div className="text-xs opacity-70">
          <div>By submitting you agree to be awesome. ✌️</div>
        </div>
      </div>
    </form>
  );
}
