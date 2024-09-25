export enum CopyrightType {
  C = "C",
  P = "P",
}

export type Copyright = {
  id: number;
  type: CopyrightType;
  text: string;
};
