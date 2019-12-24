const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
  fixBabelImports,
  addDecoratorsLegacy,
  addBundleVisualizer,
} = require("customize-cra");
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  //do stuff with the webpack config...
  //启用ES7的修改器语法（babel 7）
  addDecoratorsLegacy(),


  //配置别名
  addWebpackAlias({        
    ["@"]: resolve('src'),
  }),

  // 添加打包分析
  addBundleVisualizer({}, true),

  //antd按需加载
  fixBabelImports('import', {        
    libraryName: 'antd',        
    libraryDirectory: 'es',       
    style: 'css'
  }),

  adjustStyleLoaders(({ use: [ , css, postcss, resolve, processor ] }) => {
    css.options.sourceMap = true;         // css-loader
    postcss.options.sourceMap = true;     // postcss-loader
    // when enable pre-processor,
    // resolve-url-loader will be enabled too
    if (resolve) {
      resolve.options.sourceMap = true;   // resolve-url-loader
    }
    // pre-processor
    if (processor && processor.loader.includes('sass-loader')) {
      processor.options.sourceMap = true; // sass-loader
    }
  }),
)