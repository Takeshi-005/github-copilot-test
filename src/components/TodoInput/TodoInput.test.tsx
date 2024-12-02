// TodoInputコンポーネントのテスト実装
// テストケース：
// - 空文字バリデーション
// - エンターキーでの送信
// - エラー表示の確認

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoInput from '.';
import '@testing-library/jest-dom';

describe('TodoInput Component', () => {
  test('should validate empty input', () => {
    const handleAddTodo = jest.fn();
    render(<TodoInput onAddTodo={handleAddTodo} />);
    const inputElement = screen.getByPlaceholderText('新しいタスクを追加');
    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    // エラーメッセージは手動で修正
    expect(screen.getByText('入力してください')).toBeInTheDocument();
  });

  test('should submit on Enter key press', () => {
    const handleAddTask = jest.fn();
    render(<TodoInput onAddTodo={handleAddTask} />);
    const inputElement = screen.getByPlaceholderText('新しいタスクを追加');
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(handleAddTask).toHaveBeenCalledWith('New Task');
  });

  test('should display error message', () => {
    const handleAddTodo = jest.fn();
    render(<TodoInput onAddTodo={handleAddTodo} />);
    const inputElement = screen.getByPlaceholderText('新しいタスクを追加');
    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(screen.getByText('入力してください')).toBeInTheDocument();
  });
});