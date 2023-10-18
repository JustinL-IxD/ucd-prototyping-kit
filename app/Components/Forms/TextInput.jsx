export default function TextInput({ value, onChange }){
    return <input type='text' value={value} onChange={onChange} className="border-2 border-GreySecondary p-2 rounded mt-[1em]" />
}