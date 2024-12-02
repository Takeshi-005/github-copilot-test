import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '.';

import '@testing-library/jest-dom';

// TodoItemコンポーネントのテスト実装
// テストケース：
// - 完了状態の切り替え
// - 削除機能の動作確認
// - スタイルの適用（完了時の取り消し線）
// - イベントハンドラーの呼び出し確認

describe('TodoItem', () => {
  test('完了状態の切り替え', () => {
    const onToggle = jest.fn();
    const { getByRole } = render(<TodoItem title="test" completed={false} onToggle={onToggle} onDelete={() => {}} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalled();
  });

  test('削除機能の動作確認', () => {
    const onDelete = jest.fn();
    const { getByText } = render(<TodoItem title="test" completed={false} onToggle={() => {}} onDelete={onDelete} />);
    const button = getByText('削除');
    fireEvent.click(button);
    expect(onDelete).toHaveBeenCalled();
  });

  test('スタイルの適用（完了時の取り消し線）', () => {
    const { getByText } = render(<TodoItem title="test" completed={true} onToggle={() => {}} onDelete={() => {}} />);
    const title = getByText('test');
    
    expect(title).toHaveStyle('text-decoration: line-through');
  });
});