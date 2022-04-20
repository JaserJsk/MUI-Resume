export type UserResume = {
  id?: string;
  fullname?: string;
  role?: string;
  dob?: string;
  address?: string;
  email?: string;
  phone?: string;
  photo?: string;
  hunting?: boolean;
  freelance?: boolean;
  about_me?: string;
};

export interface UserResumeProps extends UserResume {
  resume?: any;
}
