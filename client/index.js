import React from 'react';
import { render } from 'react-dom';
import { isMobile } from 'Utils/helpers';

import Application from './Application';

// Workaround to don't let keyboards break the browser height
if (isMobile.any()) {
  document.write(`<meta name="viewport" content="width=device-width,height=${window.innerHeight}, initial-scale=1.0">`);
}

render(<Application />, document.getElementById('root'));
