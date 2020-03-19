import React from 'react';

const defaultTodo = [
    { id: 1, title: 'HelloWorldを作る', done: true },
    { id: 2, title: 'Counterを作る', done: true },
    { id: 3, title: 'TodoListを作る', done: false }
];

const styles = {
    done: {
        color: '#bbb',
        textDecoration: 'line-through'
    }
};

function TodoList() {
    const [todoList, setTodoList] = React.useState(defaultTodo);
    const input = React.useRef(null);

    // toggleCompleteメソッドを追加
    const toggleComplete = e => {
        const id = Number(e.target.id);

        // Stateに保持しているtodoListに対してループ処理
        const newTodoList = todoList.map(todo => {
            // クリックされたtodoのidと一致したらdoneのtrue/falseを反転させる
            if (todo.id === id) todo.done = !todo.done;
            return todo;
        });

        // 更新後のtodoListでStateを更新する
        setTodoList(newTodoList);
    };

    // addTodoメソッドを追加
    const addTodo = () => {
        // 新しいtodoを組み立てる
        const todo = {
            id: todoList.length + 1,
            title: input.current.value, // 入力内容をtitleにセット
            done: false
        };

        // [...state.todoList, todo]とすることで現在のtodoListの配列の最後尾に新しいtodoを追加できる
        setTodoList([...todoList, todo]);

        // 入力域を空にする
        input.current.value = '';
    };

    return (
        <div>
            <h1>TodoList</h1>
            {/* 入力域とボタンを追加 */}
            <p>
                <input ref={input} />
                <button onClick={addTodo}>追加</button>
            </p>
            {todoList.map(todo => (
                <p
                    key={todo.id}
                    style={todo.done ? styles.done : null}
                    id={todo.id}
                    onClick={toggleComplete}
                >
                    {todo.title}
                </p>
            ))}
        </div>
    );
}

export default TodoList;