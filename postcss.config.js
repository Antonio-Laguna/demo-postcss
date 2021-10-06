module.exports = context => {
  const isProd = context.env === 'production';

  return {
    map: !isProd,
    plugins: [
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-preset-env')({
        features: {
          'nesting-rules': false,
          'custom-properties': {
            preserve: true
          }
        },
        stage: 1,
        preserve: false
      }),
      isProd ? require('cssnano') : null
    ]
  };
}
