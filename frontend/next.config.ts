import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['asfarylab.com', 'koreatrade.ru'], // разрешаем внешние домены
  },
};

export default nextConfig;
