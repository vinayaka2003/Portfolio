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
    <form onSubmit={handleSubmit} className="w-full space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col-reverse">
          <input
            required
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="peer w-full py-2 bg-transparent border-b border-border text-[16px] text-foreground placeholder-muted/75 focus:outline-none focus:border-accent transition-colors font-serif rounded-none"
          />
          <label htmlFor="contact-name" className="block text-xs font-sans font-bold uppercase tracking-[0.12em] text-muted mb-2 select-none peer-focus:text-accent transition-colors duration-200">
            Name
          </label>
        </div>

        <div className="flex flex-col-reverse">
          <input
            required
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className="peer w-full py-2 bg-transparent border-b border-border text-[16px] text-foreground placeholder-muted/75 focus:outline-none focus:border-accent transition-colors font-serif rounded-none"
          />
          <label htmlFor="contact-email" className="block text-xs font-sans font-bold uppercase tracking-[0.12em] text-muted mb-2 select-none peer-focus:text-accent transition-colors duration-200">
            Email
          </label>
        </div>
      </div>

      <div className="flex flex-col-reverse">
        <textarea
          required
          id="contact-message"
          name="message"
          rows={4}
          placeholder="What's on your mind?"
          className="peer w-full py-2 bg-transparent border-b border-border text-[16px] text-foreground placeholder-muted/75 focus:outline-none focus:border-accent resize-none transition-colors font-serif rounded-none"
        />
        <label htmlFor="contact-message" className="block text-xs font-sans font-bold uppercase tracking-[0.12em] text-muted mb-2 select-none peer-focus:text-accent transition-colors duration-200">
          Message
        </label>
      </div>

      {status.error && (
        <p className="text-sm text-red-500 font-serif">
          {status.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status.submitting}
        className="w-fit px-5 py-2.5 bg-foreground text-background hover:bg-accent hover:text-background font-semibold text-xs rounded-full transition-colors disabled:opacity-50 font-sans uppercase tracking-wider cursor-pointer"
      >
        {status.submitting ? "Sending..." : "Send message →"}
      </button>
    </form>
  );
}
