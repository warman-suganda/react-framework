import React from 'react';
import Button from '@components/Button';
import Input from '@components/Input';
import { DashboardWrapper } from './sytles';

function Dashboard() {
  return (
    <DashboardWrapper>
      <div>
        <Input name="username" />
        <Button>Click Me</Button>
      </div>
    </DashboardWrapper>
  );
}

export default Dashboard;
