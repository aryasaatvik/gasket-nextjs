/* eslint-disable no-unused-vars */
import React, { CSSProperties } from 'react';
import GasketEmblem from '@gasket/assets/react/gasket-emblem.js';
import type { Metadata } from 'next';
import gasket from '@/gasket';
import { Component } from '@/component';

export const metadata: Metadata = {
  title: 'gasket-ts-nextjs',
  description: 'A basic gasket app'
};

const pageStyle: CSSProperties = { textAlign: 'center' };
const logoStyle: CSSProperties = { width: '250px', height: '250px' };

async function IndexPage() {
  const prepareData = await gasket.actions.getPrepareData();
  return (
    <div style={pageStyle}>
      <GasketEmblem style={logoStyle} />
      <Component />
      <h1>Welcome to Gasket 2!</h1>
      <p>To get started, edit <code>app/page.tsx</code> and save to reload.</p>
      <p><a href='https://gasket.dev'>Learn Gasket</a></p>
      <p>{prepareData.message}</p>
    </div>
  );
}

export default IndexPage;
