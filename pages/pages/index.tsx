import React, { CSSProperties } from 'react';
import GasketEmblem from '@gasket/assets/react/gasket-emblem.js';
import gasket from '@/gasket';
import { Component } from '@/component';
import type { GetServerSideProps } from 'next';

const pageStyle: CSSProperties = { textAlign: 'center' };
const logoStyle: CSSProperties = { width: '250px', height: '250px' };

interface HomeProps {
  prepareData: {
    message: string;
  };
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const prepareData = await gasket.actions.getPrepareData();
  return {
    props: {
      prepareData
    }
  };
};

function HomePage({ prepareData }: HomeProps) {
  return (
    <div style={pageStyle}>
      <GasketEmblem style={logoStyle} />
      {/* <Component /> */}
      <h1>Welcome to Gasket!</h1>
      <p>To get started, edit <code>pages/pages/index.tsx</code> and save to reload.</p>
      <p><a href='https://gasket.dev'>Learn Gasket</a></p>
      <p>{prepareData.message}</p>
    </div>
  );
}

export default HomePage;
