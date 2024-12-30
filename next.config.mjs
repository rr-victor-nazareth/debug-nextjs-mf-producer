import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.externals.push({
      bufferutil: 'webpack-node-externals',
      'utf-8-validate': 'webpack-node-externals',
    });

    config.plugins.push(
      new NextFederationPlugin({
        name: 'testproducer',
        filename: 'static/chunks/remoteEntry.js',
        dts: {
          generateTypes: true,
        },
        exposes: {
          './TestReact': './src/components/TestReact',
        },
        shared: {},
        extraOptions: {
          debug: true,
        },
      }),
    );

    return config;
  },
};

export default nextConfig;
