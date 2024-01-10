import { FrontendTechInfoTable } from '@/04-lib';
import type { FrontendTechUiProps } from '@/05-ui/props.types';

export const FrontendTechInfoComponent = ({ FE }: FrontendTechUiProps) => {
  return (
    <>
      <FrontendTechInfoTable FE={FE} />
    </>
  );
};
