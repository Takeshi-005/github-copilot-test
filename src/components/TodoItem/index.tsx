
"use client";
// TodoItemコンポーネントの実装
// 要件：
// - チェックボックスによる完了状態の切り替え
// - 削除ボタンの実装
// - 完了状態の場合はタイトルに取り消し線を表示

import React from 'react';

type Props = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export const TodoItem: React.FC<Props> = ({ title, completed, onToggle, onDelete }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
      <button onClick={onDelete}>削除</button>
    </div>
  );
};

export default TodoItem;
