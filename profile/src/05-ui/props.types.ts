import type { 
    ActivityInfoList,
    BasicInfo, 
    CertificateInfoList, 
    IntroduceInfo,
    ProjectInfoList,
    TechSkillInfoList, 
    WorkExperienceInfoList 
} from "@/01-domain";

import type { SoloProjectInfo, TeamProjectInfo } from '@/01-domain/projectInfo.types';

export type ActivityUiProps = {
    activityInfo: ActivityInfoList;
};

export type BasicUiProps = {
    basicInfo: BasicInfo
};

export type CertificateUiProps = {
    certificateInfo: CertificateInfoList;
};

export type IntroduceUiProps = {
    basicInfo: BasicInfo,
    introduceInfo: IntroduceInfo;
    workExperienceInfo: WorkExperienceInfoList
};

export type ProjectUiProps = {
    projectInfo: ProjectInfoList;
};

export type SoloProjectUiProps = {
    Solo: SoloProjectInfo[];
};

export type TeamProjectUiProps = {
    Team: TeamProjectInfo[];
};

export type TechSkillUiProps = {
    techSkillInfo: TechSkillInfoList;
};

export type FrontendTechUiProps = {
    FE: TechSkillInfoList['FE'];
};

export type BackendTechUiProps = {
    BE: TechSkillInfoList['BE'];
};

export type DevOpsTechUiProps = {
    DevOps: TechSkillInfoList['DevOps'];
}

export type CommunicationTechUiProps = {
    Communication: TechSkillInfoList['Communication'];
}