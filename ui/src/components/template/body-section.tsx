import { FC, ReactNode } from 'react';
import { Menu } from 'primereact/menu';
import { useHistory } from 'react-router-dom';
import Footer from './footer';
import { BreadCrumb } from 'primereact/breadcrumb';

type Props = {
  children: ReactNode;
};

const BodySection: FC<Props> = ({
  children,
}) => {
  const history = useHistory();

  const items = [
    {
      label: 'Home',
      items: [
        {
          label: 'Dashboard',
          selected: true,
          icon: 'pi pi-home',
          command: () => {
            history.push('/dashboard');
          }
        },
        {
            label: 'Organization Hirarche',
            icon: 'pi pi-sitemap',
            command: () => {
              history.push('/organization-hirarche');
            }
        },
      ],
    },
    {
      label: 'Administration',
      items: [
        {
            label: 'Departments',
            icon: 'pi pi-briefcase',
            command: () => {
              history.push('/departments');
            }
        },
        {
            label: 'Designations',
            icon: 'pi pi-times',
            command: () => {
              history.push('/designations');
            }
        },
        {
            label: 'User Types',
            icon: 'pi pi-users',
            command: () => {
              history.push('/user-types');
            }
        },
        {
            label: 'Employees',
            icon: 'pi pi-user',
            command: () => {
              history.push('/employees');
            }
        },
        {
            label: 'Projects',
            icon: 'pi pi-folder-open',
            command: () => {
              history.push('/projects');
            }
        }
      ]
    },
    {
        label: 'Leave Management',
        items: [
            {
                label: 'Apply Leave',
                icon: 'pi pi-external-link',
                url: '/apply-leaves'
            },
            {
                label: 'Leave Summary',
                icon: 'pi pi-upload',
                command:() => {
                  history.push('/leave-summary');
                }
            }
        ]
    },
    {
      label: 'Time Management',
      items: [
          {
              label: 'Edit Timesheet',
              icon: 'pi pi-file-excel',
              url: '/edit-timesheets'
          },
      ]
    },
  ];

  const bc_items = [
    { label: 'Administration' },
    { label: history.location.pathname.substr(1, history.location.pathname.length) }
  ];

  const home = { icon: 'pi pi-home', url: 'http://localhost:3000' }


  return (
    <>
      <div className="body-section">
        <div className="body-main-section">
          <div className="left-section">
            <Menu model={items} />
          </div>
          <div className="right-section">
            <BreadCrumb model={bc_items} home={home}/>
            {children}
            <Footer></Footer>
          </div>
        </div>        
      </div>
    </>
  )
}
export default BodySection;