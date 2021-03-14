export type TTypeTask = "task" | "bug" | "feature" | "story";

export interface ISkill {
  label: string;
  value: string;
}

export interface ITask {
  readonly id: string;
  from: Date;
  hours: number;
  title: string;
  type: TTypeTask;
}

export interface IProject {
  readonly id: string;
  title: string;
  period: { from: Date; to: Date };
  tasks: ITask[];
}

export interface IUser {
  readonly id: string;
  name: string;
  surname: string;
  position: string;
  employmentType: string;
  skills: ISkill[];
  avatarUrl?: string;
  projects: IProject[];
}
