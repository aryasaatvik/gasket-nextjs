import type { NextConfig } from 'next'
import gasket from '@/gasket';

const nextConfig: NextConfig = gasket.actions.getNextConfig();

export default nextConfig;
