type AboutType = "Name" | "Age" | "Email" | "Github" | "Velog";

export interface IAbout {
  type: AboutType;
  description: string | number;
}
