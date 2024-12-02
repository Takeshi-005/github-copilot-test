// TodoListコンポーネントのテスト実装
// テストケース：
// - Todoの追加
// - LocalStorageからの初期データ読み込み

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '.';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  test('Todoの追加', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('新しいタスクを追加');
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('LocalStorageからの初期データ読み込み', () => {
    const todos = [{ title: 'Task 1', completed: false }];
    localStorage.setItem('todos', JSON.stringify(todos));
    render(<TodoList />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
  });
});