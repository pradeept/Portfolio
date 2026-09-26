export type Repository = { label: string; href: string };

export type Project = {
  id: "unmute" | "rag" | "skillx" | "automation";
  label: string;
  stamp: string;
  title: string;
  description: string;
  stack: string;
  href?: string;
  repositories?: { deployments: Repository[]; drafts: Repository[] };
  action: string;
};

export const projects: Project[] = [
  { id: "unmute", label: "01 / Language × care", stamp: "a little more human", title: "Unmute", description: "A multilingual space for emotional expression, translation, and clinician-ready summaries across 10+ languages.", stack: "Next.js · Deepgram · Lingo.dev", href: "https://github.com/pradeept/unmute", action: "Explore" },
  { id: "rag", label: "02 / Documents × AI", stamp: "follow the question", title: "RAGloma", description: "Context-aware document chat with local inference and live web search. A useful answer hiding in a pile of files.", stack: "LangChain · Ollama · Pinecone", href: "https://github.com/pradeept/RAGloma", action: "Explore" },
  { id: "skillx", label: "03 / Community × real time", stamp: "still on the workbench", title: "SkillX", description: "A peer-to-peer skill exchange with video, notifications, and credits. Learning goes both ways.", stack: "Node.js · WebRTC · PostgreSQL", action: "In progress" },
  {
    id: "automation",
    label: "04 / Infrastructure × automation",
    stamp: "repeat the good parts",
    title: "Automation lab",
    description: "Repeatable Nextcloud and Infisical deployments, plus smaller Docker recipes and Kubernetes drafts still on the workbench.",
    stack: "Terraform · Ansible · Shell",
    action: "Four repos / three threads",
    repositories: {
      deployments: [
        { label: "Nextcloud", href: "https://github.com/pradeept/Nextcloud" },
        { label: "Infisical", href: "https://github.com/pradeept/Infisical" },
      ],
      drafts: [
        { label: "Docker", href: "https://github.com/pradeept/Docker-Files" },
        { label: "K8s", href: "https://github.com/pradeept/K8s-manifests" },
      ],
    },
  },
];

export const jobs = [
  { date: "2026—now", role: "Senior Software Engineer · Jyot India", description: "Notification systems and AI-powered knowledge discovery." },
  { date: "2025—26", role: "Software Development Engineer · Kagaar", description: "Founding team architecture, data modeling, and caching." },
  { date: "2024", role: "DevOps Engineer · Sirpi", description: "Cloud optimization, automation, observability, and a DMZ/IDS side project." },
];

export type Paper = { number: string; category: string; title: string; authors: string; detail: string; pdfLinks: { label: string; href: string }[] };
export const papers: Paper[] = [
  { number: "001", category: "Systems · storage", title: "The Google File System", authors: "Sanjay Ghemawat, Howard Gobioff & Shun-Tak Leung · 2003", detail: "A note from the systems shelf.", pdfLinks: [] },
  { number: "002", category: "Security · authentication", title: "HOTP & TOTP — RFC 4226 & RFC 6238", authors: "Two specifications, one rabbit hole.", detail: "A note from the security shelf.", pdfLinks: [] },
];
