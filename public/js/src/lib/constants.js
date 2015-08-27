/* Action constants */

// Content Actions
let quoteChange = 'quoteChange';
let sourceChange = 'sourceChange';

let headlineChange = 'headlineChange';
let listItemAdd = 'listItemAdd';
let listItemChange = 'listItemChange';
let listItemRemove = 'listItemRemove';

let photographerChange = 'photographerChange';
let copyrightChange = 'copyrightChange';

// Option Actions
let fontSizeChange = 'fontSizeChange';
let fontColorChange = 'fontColorChange';
let fontFaceChange = 'fontFaceChange';

let backgroundColorChange = 'backgroundColorChange';
let backgroundImageChange = 'backgroundImageChange';
let backgroundImageLoading = 'backgroundImageLoading';
let backgroundTypeChange = 'backgroundTypeChange';

let aspectRatioChange = 'aspectRatioChange';

let logoChange = 'logoChange';

module.exports = {
  SIXTEEN_NINE: '16:9',
  SQUARE: 'square',
  TWO_ONE: '2:1 (Twitter)',
  CHANGE_EVENT: 'change',
  actions: {
    content: {
      // Quote
      quoteChange,
      sourceChange,

      // List
      headlineChange,
      listItemAdd,
      listItemRemove,
      listItemChange,

      // Watermark
      photographerChange,
      copyrightChange
    },

    options: {
      // Font
      fontSizeChange,
      fontColorChange,
      fontFaceChange,

      // Background
      backgroundColorChange,
      backgroundImageChange,
      backgroundImageLoading,
      backgroundTypeChange,

      // Canvas aspect ratio
      aspectRatioChange,

      // Logo
      logoChange
    }
  }
}
