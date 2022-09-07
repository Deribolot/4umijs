import React from "react";
import yayJpg from '../assets/yay.jpg';
import {  Button  } from 'antd';
import 'antd/dist/antd.min.css';

import { ConfigProvider } from 'antd';

ConfigProvider.config({
    theme: {
        primaryColor: '#555555',
    },
});


export default function HomePage() {
  return (
      <ConfigProvider >
    <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        
        <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
      </ConfigProvider>
  );
}
