import React from 'react';
import Show from '../src/Show';
import { render, screen } from '@testing-library/react';

describe('Show Component', () => {
  it('should render fallback', () => {
    const condition = false;
    const fallback = <p data-testid="fallback-component">Fallback Component</p>;

    render(
      <Show when={condition} fallback={fallback}>
        Children
      </Show>
    );

    expect(screen.queryByTestId('fallback-component')).toBeInTheDocument();
  });

  it('should render children component', () => {
    const condition = true;
    const fallback = <p data-testid="fallback-component">Fallback Component</p>;

    render(
      <Show when={condition} fallback={fallback}>
        Children
      </Show>
    );

    expect(screen.queryByTestId('fallback-component')).not.toBeInTheDocument();
    expect(screen.getByText(/Children/)).toBeInTheDocument();
  });
});
