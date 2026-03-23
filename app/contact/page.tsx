"use client";

import React, { useState } from "react";
import { Button } from "../components/button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");
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
                setStatus("Message sent successfully!");
                // Clear form
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                setStatus(`Error: ${data.error || "Something went wrong"}`);
            }
        } catch (error) {
            setStatus("Error: Unable to send message. Please try again later.");
            console.error("Error sending contact form:", error);
        }
    };

    return (
        <div className="container mx-auto max-w-3xl lg:max-w-5xl px-5 py-12">

            <form
                onSubmit={handleSubmit}
            >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="flex flex-col gap-x-8 gap-y-6">
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
                                    required={true}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-200 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-200"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
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
                                    required={true}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-200 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-200"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
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
                    required={true}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-200 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-blue-200"
                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <Button
                            type="submit"
                            color="cyan"
                        >
                            Send message
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
