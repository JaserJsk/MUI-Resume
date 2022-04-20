export type Experience = {
  id?: string;
  company?: string;
  title?: string;
  description?: string;
  date?: string;
  current?: boolean;
  on_click?: Function;
};

export interface ExperienceProps extends Experience {}
