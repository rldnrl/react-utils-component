import React, { ReactNode } from 'react';
import ListFilter from './ListFilter';
import ListMap from './ListMap';

type ListProps = {
  children?: ReactNode;
};

export default function List({ children }: ListProps) {
  return <>{children}</>;
}

List.Map = ListMap;
List.Filter = ListFilter;
