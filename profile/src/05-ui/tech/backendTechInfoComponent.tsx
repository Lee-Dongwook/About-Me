import { BackendTechInfoTable } from '@/04-lib';
import type { BackendTechUiProps } from '@/05-ui/props.types';

export const BackendTechInfoComponent = ({ BE }: BackendTechUiProps) => {
  return (
    <>
      <BackendTechInfoTable BE={BE} />
    </>
  );
};
