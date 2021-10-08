/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar } from 'primereact/avatar';

const Header = () => {
  return(    
    <header className="header-section">
      <div className="d-flex align-items-stretch header-section-content">
        <div className='d-flex align-items-stretch left-panel'>
          <div className="org-logo d-none d-sm-none d-lg-inline-flex">
            <img src="/assets/images/logo.png" alt="" />
          </div>
        </div>
        <div className='right-panel'>
          <div className="user-avatar">
            <Avatar shape="circle" size="large">
              <i className="pi pi-user"></i>
            </Avatar>
          </div>
          <div className="user-avatar-text">
            <span className="text">Sandeep Vallabaneni</span>
            <span className="text">UI Developer</span>
          </div>
          <div className="user-avatar-ellipse">
            <i className="pi pi-ellipsis-v"></i>
          </div>
        </div>
      </div>      
    </header>
  );
}

export default Header;