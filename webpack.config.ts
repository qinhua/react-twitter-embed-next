const path = require('path');
// const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: ['./src/index.tsx'],
  // entry: ['./src/components/twitterTimelineEmbed.tsx'],
  output: {
    path: path.resolve(__dirname, '.', 'dist'),
    publicPath: '/',
    // hashFunction: 'xxhash64',
    // filename: 'index.[id].[contenthash].js'
    filename: 'react-twitter-embed.min.js',
    library: 'ReactTwitterEmbed',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        loader: 'babel-loader',
        include: path.resolve('src'),
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            [
              '@babel/preset-react',
              {
                runtime: 'automatic'
              }
            ],
            '@babel/typescript'
          ],
          plugins: ['@babel/plugin-transform-runtime']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  devtool: 'source-map', // 或者通过 SourceMapDevToolPlugin 代替它进行更细粒度控制
  optimization: {
    minimize: !true
    // minimizer: [new ESBuildMinifyPlugin({ minify: true, css: true })]
  }
};
