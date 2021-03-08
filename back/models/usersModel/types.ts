export interface ISkill {
  value: string;
  color: string;
}

export interface IUser {
  readonly id: string;
  name: string;
  surname: string;
  position: string;
  employmentType: string;
  skills: ISkill[];
  avatarUrl?: string;
}
