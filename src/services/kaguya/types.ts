export type Role = {
  id: string;
  name: string;
  permission: number;
  created_at: string;
  updated_at: string;
}

export type User = {
  id: string;
  name?: string | null;
  email: string;
  avatar: string | null;
  avatar_url: string | null;
  username: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
  user_roles: Role[];
};
