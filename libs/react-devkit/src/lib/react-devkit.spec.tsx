import { render } from '@testing-library/react';

import ReactDevkit from './react-devkit';

describe('ReactDevkit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactDevkit />);
    expect(baseElement).toBeTruthy();
  });
});
