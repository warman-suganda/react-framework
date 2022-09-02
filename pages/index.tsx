import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@containers/Home'));

export default Home;
