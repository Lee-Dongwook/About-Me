'use client';
import { useInView } from 'react-intersection-observer';
import { TechCardContainer, TechCard } from '@/03-styles';
import type { TechSkillUiProps } from '@/05-ui/props.types';
import { FrontendTechInfoComponent } from './frontendTechInfoComponent';
import { BackendTechInfoComponent } from './backendTechInfoComponent';
import { DevOpsTechInfoComponent } from './devOpsTechInfoComponent';
import { CommunicationTechInfoComponent } from './communicationTechInfoComponent';

export const TechSkillInfoListComponent = ({ techSkillInfo }: TechSkillUiProps) => {
  const [firstCardRef, firstCardInView] = useInView();
  const [secondCardRef, secondCardInView] = useInView();
  const [thirdCardRef, thirdCardInView] = useInView();
  const [fourthCardRef, fourthCardInView] = useInView();

  return (
    <TechCardContainer>
      <div style={{ textAlign: 'center' }}>
        <h1>Tech Skills</h1>
        <br />
        <TechCard ref={firstCardRef} animate={firstCardInView}>
          <FrontendTechInfoComponent FE={techSkillInfo.FE} />
        </TechCard>
        <TechCard ref={secondCardRef} animate={secondCardInView}>
          <BackendTechInfoComponent BE={techSkillInfo.BE} />
        </TechCard>
        <TechCard ref={thirdCardRef} animate={thirdCardInView}>
          <DevOpsTechInfoComponent DevOps={techSkillInfo.DevOps} />
        </TechCard>
        <TechCard ref={fourthCardRef} animate={fourthCardInView}>
          <CommunicationTechInfoComponent Communication={techSkillInfo.Communication} />
        </TechCard>
      </div>
    </TechCardContainer>
  );
};
