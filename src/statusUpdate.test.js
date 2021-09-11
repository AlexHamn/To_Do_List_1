/**
 * @jest-environment jsdom
 */

import {
  clearElement,
  createTask,
  updateStatus,
  taskInput,
  tasks,
} from './statusUpdate';
const { expect, it, describe } = require('@jest/globals');

jest.mock('./statusUpdate');

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe('adds tasks to list', () => {
  it('creates a task', () => {
    updateStatus();
    expect(tasks[0].task).toBe('mockTask');
  });
  it('updates', () => {
    expect(updateStatus());
  });
});
