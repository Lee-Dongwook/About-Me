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
    first?: TeamTechSkillInfo
    second?: TeamTechSkillInfo
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

}

export interface ProjectInfoList {
    Team: TeamProjectInfo[]
    Solo: SoloProjectInfo[]
}