import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact RIPZECOPS via WhatsApp or send your requirements using the form.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
