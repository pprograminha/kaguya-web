export interface UserRole {
  role: {
    id: string;
    name: string;
    permission: number;
  }
}

export interface User {
  email: string;
  name: string;
  avatar: string | null;
  avatar_url: string | null;
  username: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
  user_roles: UserRole[];
}

export type SignInCredentials = {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: User;
  token: string;
}