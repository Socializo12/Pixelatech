"use client";
import type React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import "./contact.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState<null | "loading" | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(res)
      const data = await res.json();
      

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
    }
  };

  return (
    <section id="faq" className="section4-container4 contact-mainbox">
      <div className="socail-contact"></div>
      {/* Contact Form */}
      <div className="w-full bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl p-[20px] border border-blue-400/20 relative overflow-hidden">
        <h2 className="text-[white]  sm:text-4xl md:text-5xl lg:text-[64px] text-3xl text-center">
          Get Free Consultancy
        </h2>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="form-group py-[15px]">
              <label htmlFor="name" className="form-label">
                <User className="w-4 h-4" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="form-input "
                // className={`form-input ${errors.name ? "error" : ""}`}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group py-[15px]">
              <label htmlFor="email" className="form-label">
                <Mail className="w-4 h-4" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your Email"
                required
                // className={`form-input ${errors.email ? "error" : ""}`}
              />
            </div>

            {/* Phone Field */}
            <div className="form-group py-[15px]">
              <label htmlFor="phone" className="form-label">
                <Phone className="w-4 h-4" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                // className={`form-input ${errors.phone ? "error" : ""}`}
              />
            </div>

            {/* Message Field */}
            <div className="form-group py-[15px]">
              <label htmlFor="message" className="form-label">
                <MessageSquare className="w-4 h-4" />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your business and lead generation goals..."
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                required
                rows={4}
                // className={`form-input resize-none ${errors.message ? "error" : ""}`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="form-submit-btn w-[min-content]  disabled:opacity-50"

              // className={`form-submit-btn ${isSubmitting ? "submitting" : ""}`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error Messages */}
            {status === "success" && (
              <p className="text-green-600 text-center font-semibold my-[10px]">
                ✅ Email sent successfully! We will get back to you
                    within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-semibold my-[10px]">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// export default Contact;
