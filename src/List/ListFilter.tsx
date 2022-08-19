import React, { useMemo } from 'react';

type ListFilterProps<T, U extends JSX.Element> = {
  /**
   * The array you want to iterate over.
   */
  each: T[];
  /**
   * A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
   */
  predicate: (item: T) => boolean;
  /**
   * The first argument contains an item of the same type as the single type of `each`.
   * The second argument is `index`.
   * Just return `JSX.Element` you want to iterate over.
   */
  children: (item: T, index?: number) => U;
};

export default function ListFilter<T, U extends JSX.Element>({
  each,
  predicate,
  children,
}: ListFilterProps<T, U>) {
  const newChildrens = useMemo(
    () => each.filter(predicate).map((item, index) => children(item, index)),
    [children, each, predicate]
  );

  return <>{newChildrens}</>;
}
