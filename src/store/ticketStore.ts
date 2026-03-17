import { create } from 'zustand';
import type { Ticket } from '@/types';

interface TicketStore {
  // State
  tickets: Ticket[];
  currentTicket: Ticket | null;
  isLoading: boolean;
  error: string | null;
  filters: {
    status?: string;
    category?: string;
    severity?: string;
  };

  // Actions
  setTickets: (tickets: Ticket[]) => void;
  setCurrentTicket: (ticket: Ticket | null) => void;
  addTicket: (ticket: Ticket) => void;
  updateTicket: (id: string, updates: Partial<Ticket>) => void;
  deleteTicket: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: TicketStore['filters']) => void;
  clearError: () => void;
}

export const useTicketStore = create<TicketStore>((set) => ({
  // Initial state
  tickets: [],
  currentTicket: null,
  isLoading: false,
  error: null,
  filters: {},

  // Actions
  setTickets: (tickets) => set({ tickets }),

  setCurrentTicket: (ticket) => set({ currentTicket: ticket }),

  addTicket: (ticket) =>
    set((state) => ({
      tickets: [ticket, ...state.tickets],
    })),

  updateTicket: (id, updates) =>
    set((state) => ({
      tickets: state.tickets.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      ),
      currentTicket:
        state.currentTicket?.id === id
          ? { ...state.currentTicket, ...updates }
          : state.currentTicket,
    })),

  deleteTicket: (id) =>
    set((state) => ({
      tickets: state.tickets.filter((t) => t.id !== id),
      currentTicket:
        state.currentTicket?.id === id ? null : state.currentTicket,
    })),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),

  setFilters: (filters) => set({ filters }),

  clearError: () => set({ error: null }),
}));
