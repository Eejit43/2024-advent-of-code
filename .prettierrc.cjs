const prettierConfig = require('@eejit/prettier-config');

module.exports = {
    ...prettierConfig,
    plugins: prettierConfig.plugins.filter((plugin) => plugin !== 'prettier-plugin-css-order'),
};
