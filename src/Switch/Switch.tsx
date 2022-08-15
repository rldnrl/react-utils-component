import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useMemo,
} from 'react';
import Match, { MatchProps } from '../Match';

export type SwitchProps = {
  /**
   * If all the conditions of the Match component, which is a child component,
   * are not met, it is rendered.
   */
  fallback: JSX.Element;
  /**
   * Locate Match Components
   */
  children: ReactNode;
};

export default function Switch({ fallback, children }: SwitchProps) {
  const matchComponents = Children.toArray(children);

  const matchComponent = useMemo(
    () =>
      matchComponents.map(child => {
        if (
          isValidElement(child) &&
          child.type === (<Match />).type &&
          (child.props as MatchProps).when
        ) {
          return cloneElement(child);
        }
        return null;
      }),
    [matchComponents]
  );

  if (matchComponent.every(element => element === null)) {
    return <>{fallback}</>;
  }

  return <>{matchComponent}</>;
}
