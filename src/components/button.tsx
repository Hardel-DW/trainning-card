import { JSX } from 'preact/jsx-runtime';

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return <button type="submit" className="bg-dark-violet text-white text-lg rounded-lg w-full py-4" {...props} />;
}
