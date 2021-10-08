import { FC, ReactNode } from 'react';
import Header from './header';

type Props = {
  title: string,
  children?: ReactNode;
};
const Template: FC<Props> = ({
  title,
  children,
}) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}

export default Template;
