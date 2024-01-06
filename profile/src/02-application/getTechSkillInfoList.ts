import type { TechSkillInfoList } from "@/01-domain";

import techSkill from '@/00-assets/techSkills.json';

export async function getTechSkillInfoList() {
    const data = await new Promise<TechSkillInfoList>((resolve) => {
        resolve(techSkill);
    });

    return data;
}