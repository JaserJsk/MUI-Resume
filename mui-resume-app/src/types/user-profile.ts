export type UserProfile = {
  id?: string;
  name?: string;
  title?: string;
  dob?: string;
  address?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  tier?: string;
  hunting?: boolean;
  freelance?: boolean;
  about_me?: string;
  url?: string;
};

export interface UserProfileProps extends UserProfile {
  usersProfile?: UserProfile[];
  error?: object | string | null;
}
