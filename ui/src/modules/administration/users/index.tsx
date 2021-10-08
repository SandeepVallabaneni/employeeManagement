import { FC, ReactNode } from 'react';
import Template from '../../../components/template';
import BodySection from '../../../components/template/body-section';

type Props = {
  children: ReactNode;
};

const Users: FC<Props> = ({
  children,
}) => {

  return (
    <Template title="Users">
      <BodySection>{children}</BodySection>
    </Template>
  );
}

export default Users;