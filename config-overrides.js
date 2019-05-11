const path = require('path');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // less 的配置
  addLessLoader(),
  // 配置别名
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  })
)
