import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell FUNWARP about your idea. Project inquiry for web apps, mobile apps, SaaS, AI products and custom software.",
};

export default function ContactPage() {
  return <ContactClient />;
}
