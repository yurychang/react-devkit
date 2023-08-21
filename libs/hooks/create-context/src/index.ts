import {
  Context,
  Provider,
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';

export type CreateContextReturn<T> = [Provider<T>, () => T, Context<T>];

type CreateContextOptions<T> = {
  defaultValue: T;
  displayName?: string;
};

// Refer {@link https://github.com/chakra-ui/chakra-ui/blob/main/packages/hooks/context/src/index.ts}
export const createContext = <T>(options: CreateContextOptions<T>) => {
  const { defaultValue, displayName } = options || {};

  const context = createReactContext<T | undefined>(defaultValue);
  context.displayName = displayName;

  const useContext = () => useReactContext(context);

  return [context.Provider, useContext, context] as CreateContextReturn<T>;
};
