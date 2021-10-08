import { useEffect, Suspense, lazy } from "react";
import {Route, Switch} from 'react-router';
import Loading from "./components/loading";

const modules:any = {
  Template: lazy( () => import('./components/template')),
  Departments: lazy( () =>  import('./modules/administration/departments')),
  Designations: lazy( () => import('./modules/administration/designations')),
  Employees: lazy( () => import('./modules/administration/employees')),
  UserTypes: lazy( () => import('./modules/administration/user-types')),
  Users: lazy( () => import('./modules/administration/users')),
};


const App = () => {

  useEffect(() => {
    // for onetime run
  }, [])

  return (
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route component={modules.Template} exact path="/" />
        <Route component={modules.Departments} exact path="/departments" />
        <Route component={modules.Designations} exact path="/designations" />
        <Route component={modules.Employees} exact path="/employees" />
        <Route component={modules.UserTypes} exact path="/user-types" />
        <Route component={modules.Users} exact path="/users" />
      </Switch>
    </Suspense>
  );
};

export default App;