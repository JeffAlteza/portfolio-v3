import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    title: "E-Wallet System",
    description:
      "Mobile financial platform supporting withdrawals, deposits, and fund transfers with a robust admin dashboard. Built fullstack with Claude Code using a subagent architecture. Real-time notifications via FCM and Telegram.",
    stack: ["Laravel", "Next.js", "Claude Code"],
    image: "/dev-projects/e-wallet/e-wallet.jpg",
    images: ["/dev-projects/e-wallet/e-wallet.jpg"],
  },
  {
    id: "02",
    title: "Insurance Management System",
    description:
      "Simplifies home and building quote creation with automated calculations based on user input. Integrates with the Unmand API for smooth data processing and reliable results.",
    stack: ["Laravel", "DDD", "Event Sourcing"],
    image: "/dev-projects/insurance-management/insurance.jpg",
    images: ["/dev-projects/insurance-management/insurance.jpg"],
  },
  {
    id: "03",
    title: "ERP System",
    description:
      "Centralizes business operations across multiple sites with biometric-based attendance tracking, employee management, and automated payroll.",
    stack: ["Laravel", "Filament", "ZKTeco"],
    image: "/dev-projects/erp/erp-system.png",
    images: ["/dev-projects/erp/erp-system.png"],
  },
  {
    id: "04",
    title: "Telegram Bot System",
    description:
      "Multi-tenant Telegram Bot platform using the Telegram API to streamline communication across teams — ideal for support, inquiries, and automation.",
    stack: ["Laravel", "Multitenancy", "Telegram API"],
    image: "/dev-projects/telegram-bot/telegram.png",
    images: ["/dev-projects/telegram-bot/telegram.png"],
  },
  {
    id: "05",
    title: "Resort Content Management System",
    description:
      "Lets users update website content, images, and labels while managing bookings, clients, and calendars.",
    stack: ["Laravel", "Filament", "Blade"],
    image: "/dev-projects/resort-cms/resort-cms.png",
    images: [
      "/dev-projects/resort-cms/resort-cms.png",
      "/dev-projects/resort-cms/Screenshot 2026-04-28 213247.png",
      "/dev-projects/resort-cms/Screenshot 2026-04-28 213306.png",
      "/dev-projects/resort-cms/Screenshot 2026-04-28 213439.png",
      "/dev-projects/resort-cms/Screenshot 2026-04-28 213519.png",
      "/dev-projects/resort-cms/Screenshot 2026-04-28 213557.png",
    ],
  },
  {
    id: "06",
    title: "E-Health System",
    description:
      "Web platform enabling appointment booking, calendar scheduling, and patient management for healthcare providers.",
    stack: ["Laravel", "Filament", "Livewire"],
    image: "/dev-projects/e-health/e_health.png",
    images: ["/dev-projects/e-health/e_health.png"],
  },
];
