/**
 * @jest-environment jsdom
 */

import { createTask, updateStatus, tasks } from './statusUpdate';
const { expect, it } = require('@jest/globals');

jest.mock('./statusUpdate');

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe('creates task', () => {
  it('creates a task', () => {
    updateStatus();
    expect(tasks[0].task).toBe('mockTask');
  });
  it('updates', () => {
    expect(updateStatus());
  });
});