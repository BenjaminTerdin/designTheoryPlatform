
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus("Message sent successfully. Thank you for reaching out!");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 text-[#292820]">
      <div className="mb-10 text-center">
        <h2 className="font-serif font-normal italic">
          Let's get in touch
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#706B60]">
          Have a question or some feedback? Send us a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
              maxLength={100}
              className="h-11 rounded-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              maxLength={254}
              className="h-11 rounded-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="What is this about?"
            required
            maxLength={150}
            className="h-11 rounded-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            required
            minLength={10}
            maxLength={5000}
            className="min-h-40 resize-y rounded-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSending}
          className="h-11 w-full rounded-none bg-[#292820] text-[#F3EFE6] hover:bg-[#706B60]"
        >
          {isSending ? "Sending..." : "Send message"}
          {!isSending && (
            <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
          )}
        </Button>

        {status && (
          <p
            role="status"
            aria-live="polite"
            className="text-sm leading-6 text-[#706B60]"
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
