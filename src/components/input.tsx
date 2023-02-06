type Props = {
    label: string;
    onChange: (value: string) => void;
    placeholder?: string;
    value?: string | number;
    id?: string;
};

export default function Input(props: Props) {
    return (
        <div className="mb-6">
            <label htmlFor={props.id} className="block mb-2 text-sm uppercase tracking-widest font-bold text-dark-violet">
                {props.label}
            </label>
            <input
                type="text"
                id={props.id}
                onInput={(e) => props.onChange((e.target as HTMLInputElement).value)}
                value={props.value}
                className="bg-transparent border border-dark-gray font-bold text-dark-violet text-lg rounded-lg focus:ring-violet-700 focus:border-violet-500 border-2 block w-full p-2.5 placeholder-dark-gray"
                placeholder={props.placeholder}
                required
            />
        </div>
    );
}
