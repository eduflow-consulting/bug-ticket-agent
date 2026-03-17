import { create } from 'zustand';
import type { Message, Conversation } from '@/types';

interface AgentStore {
  // State
  messages: Message[];
  currentConversation: Conversation | null;
  isStreaming: boolean;
  error: string | null;
  tokenCount: number;

  // Actions
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  setCurrentConversation: (conversation: Conversation | null) => void;
  setStreaming: (streaming: boolean) => void;
  setError: (error: string | null) => void;
  setTokenCount: (count: number) => void;
  clearMessages: () => void;
  clearError: () => void;
}

export const useAgentStore = create<AgentStore>((set) => ({
  // Initial state
  messages: [],
  currentConversation: null,
  isStreaming: false,
  error: null,
  tokenCount: 0,

  // Actions
  setMessages: (messages) => set({ messages }),

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
      tokenCount: state.tokenCount + (message.tokens || 0),
    })),

  setCurrentConversation: (conversation) => set({ currentConversation: conversation }),

  setStreaming: (streaming) => set({ isStreaming: streaming }),

  setError: (error) => set({ error }),

  setTokenCount: (count) => set({ tokenCount: count }),

  clearMessages: () =>
    set({
      messages: [],
      currentConversation: null,
      tokenCount: 0,
    }),

  clearError: () => set({ error: null }),
}));
