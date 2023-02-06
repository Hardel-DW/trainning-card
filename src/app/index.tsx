import { useState } from 'preact/hooks';

export function Index() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello Preact!</h1>
            <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
        </div>
    );
}
