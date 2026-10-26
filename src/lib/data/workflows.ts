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
      "/n8n-projects/GHLInsight/screenshot-211350.png",
      "/n8n-projects/GHLInsight/screenshot-211433.png",
      "/n8n-projects/GHLInsight/screenshot-211518.png",
      "/n8n-projects/GHLInsight/screenshot-211620.png",
      "/n8n-projects/GHLInsight/screenshot-211652.png",
    ],
  },
  {
    id: "WF-002",
    span: "side",
    title: "Resort AI Concierge & Booking Agent",
    description:
      "Telegram concierge for a resort, running a Groq LLM (gpt-oss-120b) in n8n. The agent answers from the resort's own API through seven HTTP tools: resort info, features, gallery, feedback, availability, bookings, and inquiries. It only reports what the API returns, and every booking needs the guest's explicit confirmation. The admin gets a copy of each booking or inquiry on Telegram.",
    status: "live",
    stack: ["n8n", "Groq", "Telegram", "Laravel", "Tool-calling"],
    nodes: [
      { label: "User" },
      { label: "Agent", active: true },
      { label: "Tools" },
      { label: "DB" },
    ],
    images: [
      "/n8n-projects/Resort/resortbot.png",
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
    id: "WF-008",
    span: "half",
    title: "AI Inbox Concierge",
    description:
      "Polls Gmail every minute, has a Groq LLM classify and extract each email (category, priority, deadline, amount, job details), and logs every message to a data table. Drafted replies wait for approval on Telegram before anything is sent. Invoices and job leads trigger alerts; everything else lands in a silent digest. Errors go to a Sheet and an admin chat.",
    status: "testing",
    stack: ["Gmail API", "Groq", "Telegram Bot", "Data Tables", "Approval Flow"],
    images: ["/n8n-projects/MailButler/MailButler.png"],
    nodes: [
      { label: "Gmail" },
      { label: "LLM", active: true },
      { label: "Route" },
      { label: "Approve" },
    ],
  },
  {
    id: "WF-009",
    span: "half",
    title: "Restaurant Messenger Bot",
    description:
      "Messenger concierge for restaurants: answers menu and FAQ questions from a knowledge-base doc and takes table reservations. Code, not the LLM, checks hours, capacity, and lead time, then the owner confirms each booking on Telegram. Hands off to a human when needed, and sends reminders and a morning brief from a Sheet-backed config.",
    status: "in-progress",
    stack: ["n8n", "Messenger", "Groq", "Google Sheets", "Telegram"],
    nodes: [
      { label: "Guest" },
      { label: "Agent", active: true },
      { label: "Code" },
      { label: "Owner" },
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
