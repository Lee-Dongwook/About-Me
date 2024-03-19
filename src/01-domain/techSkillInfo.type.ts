type TechSkillInfo = {
  name: string;
  level: number;
};

type FrontEndTechSkillInfo = {
  Language: TechSkillInfo[];
  LibraryOrFramework: TechSkillInfo[];
  Style: TechSkillInfo[];
  Test: TechSkillInfo[];
  Package: TechSkillInfo[];
  Format: TechSkillInfo[];
};

type BackEndTechSkillInfo = {
  Language: TechSkillInfo[];
  LibraryOrFramework: TechSkillInfo[];
  Database: TechSkillInfo[];
};

type DevOpsTechSkillInfo = TechSkillInfo[];
type CommunicationTechSkillInfo = TechSkillInfo[];

export interface TechSkillInfoList {
  FE: FrontEndTechSkillInfo;
  BE: BackEndTechSkillInfo;
  DevOps: DevOpsTechSkillInfo;
  Communication: CommunicationTechSkillInfo;
}
