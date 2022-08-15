import React, { ReactNode } from 'react';

export type ShowProps = {
  /**
   * Conditions to be used for conditional rendering.
   */
  when?: boolean;
  /**
   * Render when the condition is `when=false`.
   */
  fallback?: JSX.Element;
  /**
   * Render when the condition is `when=true`.
   */
  children?: ReactNode;
};

export default function Show({ when, fallback, children }: ShowProps) {
  if (!when) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
}
