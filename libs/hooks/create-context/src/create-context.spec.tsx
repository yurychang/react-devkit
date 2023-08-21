import { renderHook } from '@testing-library/react';

import { createContext } from './index';
import { ReactNode } from 'react';

describe('createContext', () => {
  it('should pass context value successfully', () => {
    const contextValue = { count: 0 };

    const [TestProvider, useTestHook] = createContext<typeof contextValue>({
      defaultValue: contextValue,
    });

    const wrapper = ({ children }: { children: ReactNode }) => (
      <TestProvider value={contextValue}>{children}</TestProvider>
    );
    const { result } = renderHook(useTestHook, { wrapper });

    expect(result.current).toBe(contextValue);
  });
});
