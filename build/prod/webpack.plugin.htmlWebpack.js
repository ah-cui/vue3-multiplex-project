
const prodBuildConfig = require('./prod.conf.js');


module.exports = 
{
    filename: prodBuildConfig.index,
    template: 'index.html',
    inject: false,
    minify: {
        collapseWhitespace: false,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      templateParameters: (compilation, assets, assetTags, options) => {
           return {
              compilation,
              webpackConfig: compilation.options,
              htmlWebpackPlugin: {
                  tags: assetTags,
                  files: assets,
                  options,
              },
              'prod':true, 
              version:"RELEASE-V"+(new Date()).format("yyyyMMddhhmmss"),
          }
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'auto'
}