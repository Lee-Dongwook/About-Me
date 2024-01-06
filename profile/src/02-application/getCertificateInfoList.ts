import type { CertificateInfoList } from "@/01-domain";

import certificate from '@/00-assets/certificate.json';

export async function getCertificateInfoList() {
    const data = await new Promise<CertificateInfoList>((resolve) => {
        resolve(certificate);
    });

    return data;
}