import React, { useMemo } from 'react';

type ListMapProps<T, U extends JSX.Element> = {
  /**
   * The array you want to iterate over.
   */
  each: T[];
  /**
   * The first argument contains an item of the same type as the single type of `each`.
   * The second argument is `index`.
   * Just return `JSX.Element` you want to iterate over.
   */
  children: (item: T, index?: number) => U;
};

export default function ListMap<T, U extends JSX.Element>({
  each,
  children,
}: ListMapProps<T, U>) {
  const newChildrens = useMemo(
    () => each.map((item, index) => children(item, index)),
    [children, each]
  );

  return <>{newChildrens}</>;
}
