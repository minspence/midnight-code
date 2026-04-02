"use client";

import React, { useState } from "react";
import Alert from "./Alert";

type AlertState = { variant: "success" | "error"; message: string } | null;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState<AlertState>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setAlert(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({ variant: "success", message: "Message sent! We'll be in touch soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setAlert({
          variant: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setAlert({
        variant: "error",
        message: "Unable to send message. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex flex-col gap-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm/6 font-semibold uppercase text-white"
          >
            Name
          </label>
          <div className="mt-2.5">
            <input
              id="name"
              name="name"
              type="text"
              maxLength={20}
              value={formData.name}
              onChange={handleChange}
              autoComplete="given-name"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-200 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-200"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold uppercase text-white"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              maxLength={50}
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-200 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-200"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold uppercase text-white"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              maxLength={500}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-200 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-200"
            />
          </div>
        </div>

        {alert && (
          <Alert
            variant={alert.variant}
            message={alert.message}
            onDismiss={() => setAlert(null)}
          />
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-200 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-2 px-4 rounded-md transition-colors"
          >
            {submitting ? "Sending…" : "Send message"}
          </button>
        </div>
      </div>
    </form>
  );
}
