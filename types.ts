export type AssistantMessageRole = "user" | "assistant" | "system"

export interface AssistantMessage {
  id: string
  role: AssistantMessageRole
  content: string
  ts: number
}

export interface Todo {
  id: string
  title: string
  done: boolean
  createdAt: number
}

export interface Note {
  id: string
  text: string
  createdAt: number
}

export interface Reminder {
  id: string
  text: string
  dueAt: number
  createdAt: number
}

// Client actions produced by the AI "agent" endpoint and executed in the browser.
export type ClientAction =
  | { type: "open-url"; url: string }
  | { type: "type-pad"; mode: "replace" | "append"; text: string }
  | { type: "download"; filename: string; content: string; mime?: string }
  | { type: "add-todo"; title: string }
  | { type: "set-timer"; label?: string; ms: number }
  | { type: "make-note"; text: string }
  | { type: "set-reminder"; text: string; ms: number }

// For future expansion
export interface CommandResult {
  ok: boolean
  message?: string
  data?: any
}
