/**
 * @jest-environment jsdom
 */

import {
  tasks,
  clearCompleted,
  clearOverwrite,
  resetTasks,
} from './taskDeletion';

const { expect, it, describe } = require('@jest/globals');

jest.mock('./taskDeletion');

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe('deletes tasks from list', () => {
  it('deletes all tasks', () => {
    resetTasks();
    expect(tasks[0]).toBe(undefined);
  });
  it('deletes completed tasks', () => {
    clearCompleted();
    expect(tasks[0]).toBe(undefined);
  });
  it('deletes old tasks', () => {
    clearOverwrite();
    expect(tasks[0]).toBe(undefined);
  });
});
