import { FC, ReactNode } from 'react';
import Template from '../../../components/template';
import BodySection from '../../../components/template/body-section';
import Main from './main';

type Props = {
  children: ReactNode;
};

const Departments: FC<Props> = ({
  children,
}) => {

  return (
    <Template title="Departments">
      <BodySection>
        <Main></Main>  
      </BodySection>
    </Template>
  );
}

export default Departments;