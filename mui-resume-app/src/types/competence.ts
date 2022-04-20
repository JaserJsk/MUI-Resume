export type Competence = {
  id?: string;
  skill_name?: string;
  skill_level?: number;
  type?: string;
};

export interface CompetenceProps extends Competence {
  ski?: any;
}
