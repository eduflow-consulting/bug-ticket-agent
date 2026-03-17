import { apiCall } from './api';
import { useAuthStore } from '@/store/authStore';
import type { User, LoginPayload, AuthTokens } from '@/types';

export const authService = {
  /**
   * Login user with email and password
   */
  async login(payload: LoginPayload): Promise<AuthTokens> {
    const response = await apiCall<AuthTokens>('POST', '/api/auth/login', payload);
    if (!response.data) throw new Error('Login failed');

    const { accessToken, refreshToken } = response.data;
    useAuthStore.getState().setTokens(response.data);

    // Fetch user data
    await authService.getCurrentUser();

    return response.data;
  },

  /**
   * Get current authenticated user
   */
  async getCurrentUser(): Promise<User> {
    const response = await apiCall<User>('GET', '/api/auth/me');
    if (!response.data) throw new Error('Failed to fetch user');

    useAuthStore.getState().setUser(response.data);
    return response.data;
  },

  /**
   * Refresh access token
   */
  async refreshToken(): Promise<AuthTokens> {
    const response = await apiCall<AuthTokens>('POST', '/api/auth/refresh');
    if (!response.data) throw new Error('Token refresh failed');

    useAuthStore.getState().setTokens(response.data);
    return response.data;
  },

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      await apiCall('POST', '/api/auth/logout');
    } finally {
      useAuthStore.getState().logout();
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    const { accessToken } = useAuthStore.getState();
    return !!accessToken;
  },
};
