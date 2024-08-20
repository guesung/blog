interface EmailInputProps {
  onNext: (other: any) => void;
}
export default function EmailInput({ onNext }) {
  return (
    <div>
      <button onClick={onNext}>클릭</button>
    </div>
  );
}
