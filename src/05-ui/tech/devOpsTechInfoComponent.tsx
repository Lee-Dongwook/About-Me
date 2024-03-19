import { DevOpsTechInfoTable } from '@/04-lib';
import type { DevOpsTechUiProps } from '@/05-ui/props.types';

export const DevOpsTechInfoComponent = ({ DevOps }: DevOpsTechUiProps) => {
  return (
    <>
      <DevOpsTechInfoTable DevOps={DevOps} />
    </>
  );
};
