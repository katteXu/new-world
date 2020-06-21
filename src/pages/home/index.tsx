import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom'
import './index.css'
interface HomeProps { }

function Home({ }: HomeProps) {
  const history = useHistory();
  return (
    <div className="home">
      Home Page
      <Button onClick={() => history.push('/user')}>用户信息</Button>
    </div>
  );
}

export default Home;
