type TeamMemberInfo = {
    total: number
    FE?: number
    BE?: number
    Planner?: number
    Designer?: number
    description?: string
}

type TechSkillInfo = {
    FE?: string[]
    BE?: string[]
    DB?: string[]
    DevOps?: string[]
}

type RefactorTeamTechSkillInfo = {
    first: TechSkillInfo
    second: TechSkillInfo
}

export interface TeamProjectInfo {
    name: string
    description: string
    period: string  | string[]
    member: TeamMemberInfo
    Skills: TechSkillInfo | RefactorTeamTechSkillInfo
    Functions: string[]
}

export interface SoloProjectInfo {
    name: string
    description: string
    period: string | string[]
    Skills: TechSkillInfo
    Functions: string[]
}

export interface ProjectInfoList {
    Team: TeamProjectInfo[]
    Solo: SoloProjectInfo[]
}