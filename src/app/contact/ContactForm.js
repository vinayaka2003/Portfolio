"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqejrlvn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        form.reset();
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: "Something went wrong. Please try again or email me directly.",
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: "Something went wrong. Please try again or email me directly.",
      });
    }
  };

  if (status.success) {
    return (
      <div className="text-base sm:text-lg text-accent font-serif py-2">
        Message sent. Thanks for reaching out.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-sans font-bold uppercase tracking-wider text-muted mb-2 select-none">
            Name
          </label>
          <input
            required
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-base text-foreground placeholder-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors font-serif"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-sans font-bold uppercase tracking-wider text-muted mb-2 select-none">
            Email
          </label>
          <input
            required
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-base text-foreground placeholder-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors font-serif"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-sans font-bold uppercase tracking-wider text-muted mb-2 select-none">
          Message
        </label>
        <textarea
          required
          id="contact-message"
          name="message"
          rows={5}
          placeholder="What's on your mind?"
          className="w-full px-4 py-3 bg-transparent border border-border rounded-lg text-base text-foreground placeholder-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 resize-none transition-colors font-serif"
        />
      </div>

      {status.error && (
        <p className="text-sm text-red-500 font-serif">
          {status.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status.submitting}
        className="w-fit px-6 py-3 bg-foreground text-background hover:bg-accent hover:text-background font-semibold text-sm rounded-lg transition-colors disabled:opacity-50 font-sans uppercase tracking-wider cursor-pointer"
      >
        {status.submitting ? "Sending..." : "Send message →"}
      </button>
    </form>
  );
}
