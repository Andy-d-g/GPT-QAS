export type Context = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type QA = {
  question: string;
  answer: string;
};