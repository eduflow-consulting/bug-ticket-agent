import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, AuthTokens } from '@/types';

interface AuthStore {
  // State
  currentUser: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;

  // Actions
  setUser: (user: User | null) => void;
  setTokens: (tokens: AuthTokens) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>(
  persist(
    (set) => ({
      // Initial state
      currentUser: null,
      accessToken: null,
      refreshToken: null,
      isLoading: false,
      isAuthenticated: false,
      error: null,

      // Actions
      setUser: (user) =>
        set({
          currentUser: user,
          isAuthenticated: user !== null,
        }),

      setTokens: (tokens) =>
        set({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        }),

      setLoading: (loading) => set({ isLoading: loading }),

      setError: (error) => set({ error }),

      logout: () =>
        set({
          currentUser: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        }),

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        refreshToken: state.refreshToken,
      }),
    }
  )
);
