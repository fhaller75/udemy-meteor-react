import React from 'react';
import ReactDom from 'react-dom';

import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
      <EmployeeList />
    </div>
  );
};

Meteor.startup(() => {
  ReactDom.render(<App />, document.querySelector('.container'));
});
