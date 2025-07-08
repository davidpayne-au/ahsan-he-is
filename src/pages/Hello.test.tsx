import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../test-utils/axe-helper';
import { HelloPage } from './Hello';

describe('HelloPage', () => {
  it('renders without errors', () => {
    render(<HelloPage />);
  });

  it('should not have any accessibility violations', async () => {
    const { container } = render(<HelloPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
