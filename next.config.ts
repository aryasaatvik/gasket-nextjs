import type { NextConfig } from 'next'
import gasket from '@/gasket';

// @ts-expect-error getNextConfig is an optional action
const nextConfig: NextConfig = gasket.actions.getNextConfig();

export default nextConfig;