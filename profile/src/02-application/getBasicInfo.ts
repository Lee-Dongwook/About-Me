import type { BasicInfo } from "@/01-domain";

import basicInfo from '@/00-assets/basicInfo.json';

export async function getBasicInfo() {
    const data = await new Promise<BasicInfo>((resolve) => {
        resolve(basicInfo);
    });

    return data;
}