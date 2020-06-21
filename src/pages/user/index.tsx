import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import './index.css';

const User = () => { 
  const history = useHistory();
  return <div className="user">
    User Page
     <Button onClick={()=>history.goBack()}>返回</Button>
  </div>
}

export default User