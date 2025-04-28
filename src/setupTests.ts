
import '@testing-library/jest-dom';
import { expect } from 'vitest';

// Extend Vitest's expect with jest-dom matchers
// Note: Starting with jest-dom v6, matchers are exposed from the main package
import * as jestDomMatchers from '@testing-library/jest-dom';

expect.extend(jestDomMatchers);
