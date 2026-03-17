// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'developer' | 'qa';
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Ticket Types
export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: 'frontend' | 'backend' | 'mobile' | 'infrastructure' | 'other';
  status: 'draft' | 'enriching' | 'enriched' | 'synced' | 'closed';
  severity: 'critical' | 'high' | 'medium' | 'low';
  jiraKey?: string;
  jiraUrl?: string;
  userId: string;
  conversationId: string;
  attachments: Attachment[];
  labels: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Agent Message Types
export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant';
  content: string;
  attachments?: Attachment[];
  tokens?: number;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  ticketId: string;
  userId: string;
  messages: Message[];
  status: 'active' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

// Attachment Types
export interface Attachment {
  id: string;
  name: string;
  type: 'screenshot' | 'log' | 'video' | 'other';
  mimeType: string;
  size: number;
  url: string;
  s3Key?: string;
  uploadedAt: Date;
  expiresAt: Date;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Error Types
export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: Record<string, any>;
}

// Auth Types
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}

// Audit Log Types
export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: 'create_ticket' | 'edit_ticket' | 'chat_message' | 'sync_jira' | 'upload_attachment';
  resourceType: 'ticket' | 'conversation' | 'attachment';
  resourceId: string;
  changes?: Record<string, [old: any, new: any]>;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
  status: 'success' | 'failed';
  errorMessage?: string;
}
