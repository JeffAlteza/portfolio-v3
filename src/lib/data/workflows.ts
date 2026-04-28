import type { Workflow } from "@/types";

export const workflows: Workflow[] = [
  {
    id: "WF-001",
    featured: true,
    span: "feature",
    title: "GHL AI Insight Automation",
    description:
      "Full lead capture and AI follow-up system: GHL form → contact tagging + pipeline assignment → n8n webhook → Groq/OpenAI generates a personalized insight → writes back to GHL custom field → insight email sent automatically. Two-workflow architecture prevents overlapping sequences on re-submissions. Failed LLM responses branch to an error log; GHL gets an immediate 200 OK so the webhook never blocks.",
    status: "live",
    stack: ["GoHighLevel", "n8n", "Groq", "OpenAI", "Webhook"],
    nodes: [
      { label: "GHL Form" },
      { label: "n8n", active: true },
      { label: "LLM" },
      { label: "GHL CRM" },
    ],
    images: [
      "/n8n-projects/GHLInsight/Screenshot 2026-04-28 211350.png",
      "/n8n-projects/GHLInsight/Screenshot 2026-04-28 211433.png",
      "/n8n-projects/GHLInsight/Screenshot 2026-04-28 211518.png",
      "/n8n-projects/GHLInsight/Screenshot 2026-04-28 211620.png",
      "/n8n-projects/GHLInsight/Screenshot 2026-04-28 211652.png",
    ],
  },
  {
    id: "WF-002",
    span: "side",
    title: "Resort AI Concierge & Booking Agent",
    description:
      "Telegram-connected GPT-4o-mini agent with seven custom HTTP tool nodes wired into a live Laravel REST API. Guests converse naturally; bookings land in the production database.",
    status: "live",
    stack: ["n8n", "GPT-4o-mini", "Telegram", "Laravel", "Tool-calling"],
    nodes: [
      { label: "User" },
      { label: "Agent", active: true },
      { label: "Tools" },
      { label: "DB" },
    ],
    images: [
      "/n8n-projects/Resort/ResortCMSAIChatbot.png",
      "/n8n-projects/Resort/image1.png",
      "/n8n-projects/Resort/image2.png",
      "/n8n-projects/Resort/image3.png",
      "/n8n-projects/Resort/image4.png",
      "/n8n-projects/Resort/image5.png",
      "/n8n-projects/Resort/image6.png",
      "/n8n-projects/Resort/image7.png",
    ],
  },
  {
    id: "WF-003",
    span: "half",
    title: "Voice AI Appointment Booking",
    description:
      "Vapi.ai voice agent with n8n webhooks handling real-time booking and updates. Booking IDs, Gmail HTML confirmations, Sheets logging — triggered entirely by voice.",
    status: "testing",
    stack: ["Vapi.ai", "n8n", "Webhooks"],
    images: [
      "/n8n-projects/CustomerSupport/CustomerSupportTicketSystem.png",
      "/n8n-projects/CustomerSupport/image.png",
      "/n8n-projects/CustomerSupport/image1.png",
    ],
  },
  {
    id: "WF-004",
    span: "half",
    title: "Gmail Classifier",
    description:
      "Groq LLM routes inbox into categories via Switch node, auto-applies Gmail labels. Saves 30 min/day of triage.",
    status: "live",
    stack: ["Groq", "Gmail API"],
    images: [
      "/n8n-projects/EmailClassifier/EmailClassifier.png",
      "/n8n-projects/EmailClassifier/image.png",
      "/n8n-projects/EmailClassifier/image1.png",
    ],
  },
  {
    id: "WF-005",
    span: "half",
    title: "Social Content Pipeline with Human-in-Loop",
    description:
      "Scheduled NewsAPI fetch, Groq Llama-3.1 drafts LinkedIn + Twitter variants as JSON. Inline Telegram Approve/Reject keyboard; second workflow handles callbacks. Human stays in control.",
    status: "in-progress",
    stack: ["NewsAPI", "Groq Llama-3.1", "Telegram Bot", "Approval Flow"],
    images: [
      "/n8n-projects/SocialMedia/SocialMediaNews.png",
      "/n8n-projects/SocialMedia/SocialMediaNews2.png",
      "/n8n-projects/SocialMedia/SocialMediaNews3.png",
    ],
  },
  {
    id: "WF-006",
    span: "half",
    title: "Order Notifier",
    description:
      "E-commerce webhook fans out to HTML email, ops Telegram channel, and audit Sheet. Merge node for atomic response.",
    status: "live",
    stack: ["Webhook", "Gmail", "Merge"],
    images: [
      "/n8n-projects/OrderNotification/OrderNotificationSystem.png",
      "/n8n-projects/OrderNotification/image.png",
      "/n8n-projects/OrderNotification/image1.png",
      "/n8n-projects/OrderNotification/image2.png",
    ],
  },
  // {
  //   id: "WF-007",
  //   span: "half",
  //   title: "Daily Weather Digest",
  //   description:
  //     "Scheduled Open-Meteo + Big Data Cloud fetch, merged and mapped against WMO weathercodes in a JS Code node, delivered to Telegram.",
  //   status: "live",
  //   stack: ["Open-Meteo", "JS Code", "Telegram"],
  //   images: [
  //     "/n8n-projects/WeatherReport/WeatherReportBot.png",
  //     "/n8n-projects/WeatherReport/image.png",
  //   ],
  // },
];
