import axios, { AxiosInstance, AxiosError } from 'axios';
import { useAuthStore } from '@/store/authStore';
import type { ApiResponse, ApiError } from '@/types';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor - add JWT token
api.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle 401
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Token expired, logout
      useAuthStore.getState().logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Type-safe API wrapper
export async function apiCall<T = any>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  url: string,
  data?: any
): Promise<ApiResponse<T>> {
  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response.data as ApiResponse<T>;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        code: error.response?.data?.code || 'UNKNOWN_ERROR',
        message: error.response?.data?.message || error.message,
        statusCode: error.response?.status || 500,
      } as ApiError;
    }
    throw error;
  }
}

export default api;
