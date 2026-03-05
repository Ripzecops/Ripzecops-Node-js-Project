import { BRAND } from "@/lib/config";

export function buildWaLink(message?: string) {
  const text = encodeURIComponent(message ?? BRAND.whatsappPrefill);
  return `${BRAND.whatsappWaMe}?text=${text}`;
}

export function buildWaMessage(payload: {
  name: string;
  contact: string;
  service: string;
  message: string;
}) {
  return [
    `Hi RIPZECOPS,`,
    ``,
    `Name: ${payload.name}`,
    `Contact: ${payload.contact}`,
    `Service Needed: ${payload.service}`,
    ``,
    `Message:`,
    `${payload.message}`,
  ].join("\n");
}
