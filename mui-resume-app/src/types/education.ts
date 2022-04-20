export type Education = {
  id?: string;
  school?: string;
  degree?: string;
  description?: string;
  date?: string;
};

export interface EducationProps extends Education {
  exp?: any;
}
