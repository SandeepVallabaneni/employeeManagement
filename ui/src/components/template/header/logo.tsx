import React, { FC } from 'react';
import { pathSettings } from '../../../config';

type Props = {
  src?: string,
};

const Logo: FC<Props> = (props) => {
  const { src } = props;
  return (
    <div className="Organization-logo_container">
      <img alt="Company Logo" src={src ? src : `${pathSettings.basename}/assets/images/logo.png`} />
    </div>
  );
};

export default Logo;
