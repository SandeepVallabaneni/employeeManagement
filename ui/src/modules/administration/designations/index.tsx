import { FC, ReactNode } from 'react';
import Template from '../../../components/template';
import BodySection from '../../../components/template/body-section';

type Props = {
  children: ReactNode;
};


const Designations: FC<Props> = ({
  children,
}) => {

  return (
    <Template title="Designations">
      <BodySection>{children}</BodySection>
    </Template>
  );
}

export default Designations;