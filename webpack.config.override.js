/*eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase */
const getBabelWebpackConfig = require('@nrwl/react/plugins/babel');

module.exports = (config) => {
  config.node = {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  };

  return getBabelWebpackConfig(config);
};
