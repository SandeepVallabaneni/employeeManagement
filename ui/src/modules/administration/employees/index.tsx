import { FC, ReactNode } from 'react';
import Template from '../../../components/template';
import BodySection from '../../../components/template/body-section';

type Props = {
  children: ReactNode;
};

const Employees: FC<Props> = ({
  children,
}) => {

  return (
    <Template title="Employees">
      <BodySection>{children}</BodySection>
    </Template>
  );
}

export default Employees;