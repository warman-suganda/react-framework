import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@containers/Dashboard'));

export default Dashboard;
