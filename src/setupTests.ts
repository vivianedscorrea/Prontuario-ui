
import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// Add the custom matchers from @testing-library/jest-dom to Vitest
expect.extend(matchers);
