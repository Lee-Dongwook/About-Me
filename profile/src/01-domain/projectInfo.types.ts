type TeamMemberInfo = {
    total: number
    FE?: number
    BE?: number
    Planner?: number
    Designer?: number
    description?: string
}

type TeamTechSkillInfo = {
    FE?: string[]
    BE?: string[]
    DB?: string[]
    DevOps?: string[]
}

type RefactorTeamTechSkillInfo = {
    first: TeamTechSkillInfo
    second: TeamTechSkillInfo
}

type SoloTechSkillInfo = {
    FE?: string[]
    BE?: string[]
    DB?: string[]
    DevOps?: string[]
}

interface TeamProjectInfo {
    name: string
    description: string
    period: string  | string[]
    member: TeamMemberInfo
    Skills: TeamTechSkillInfo | RefactorTeamTechSkillInfo
    Functions: string[]
}

interface SoloProjectInfo {
    name: string
    description: string
    period: string | string[]
    Skills: SoloTechSkillInfo
    Functions: string[]
}

export interface ProjectInfoList {
    Team: TeamProjectInfo[]
    Solo: SoloProjectInfo[]
}