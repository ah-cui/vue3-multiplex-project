

module.exports =
{
    filename: 'index.html',
    template: 'index.html',
    inject: false,
    templateParameters: (compilation, assets, assetTags, options) => {
        return {
                  compilation,
                  webpackConfig: compilation.options,
                  htmlWebpackPlugin: {
                      tags: assetTags,
                      files: assets,
                      options,
                  },
                  'prod':false,
        }
    },
};

