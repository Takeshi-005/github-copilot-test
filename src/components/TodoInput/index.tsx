// TodoInput コンポーネントの実装
// 要件：
// - フォームバリデーション（空文字チェック）
// - 入力中のトリム処理
// - エンターキーでの送信対応
// - 送信後の入力フィールドクリア
// - エラー状態の表示

import React, { useState } from 'react';

// TodoInputProps型定義
type TodoInputProps = {
  onAddTodo: (todo: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) {
      setError('入力してください');
      return;
    }
    onAddTodo(todo.trim());
    setTodo('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="新しいタスクを追加"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit">追加</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default TodoInput;