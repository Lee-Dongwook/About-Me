type DetailWorkInfo = {
    period: string
    description: string
    work: string
    result: string[]
}

interface WorkExperienceInfo {
    company: string
    period: string
    year?: number
    month?: number
    position: string
    tech: string[]
    detail: DetailWorkInfo[] 
}

export type WorkExperienceInfoList = WorkExperienceInfo[]