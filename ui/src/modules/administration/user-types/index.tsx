import { FC, ReactNode } from 'react';
import Template from '../../../components/template';
import BodySection from '../../../components/template/body-section';

type Props = {
  children: ReactNode;
};

const UserTypes: FC<Props> = ({
  children,
}) => {

  return (
    <Template title="UserTypes">
      <BodySection>{children}</BodySection>
    </Template>
  );
}

export default UserTypes;