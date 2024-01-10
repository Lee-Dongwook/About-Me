import { CommunicationTechInfoTable } from '@/04-lib';
import type { CommunicationTechUiProps } from '@/05-ui/props.types';

export const CommunicationTechInfoComponent = ({ Communication }: CommunicationTechUiProps) => {
  return (
    <>
      <CommunicationTechInfoTable Communication={Communication} />
    </>
  );
};
