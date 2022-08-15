import React, { ReactNode } from 'react';

export type MatchProps = {
  /**
   * If `true`, the child component is rendered.
   */
  when?: boolean;
  /**
   * Rendered when the condition is `true`.
   */
  children?: ReactNode;
};

export default function Match({ children }: MatchProps) {
  return <>{children}</>;
}
