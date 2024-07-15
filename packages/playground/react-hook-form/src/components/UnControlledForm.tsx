import { useRef } from 'react';

export default function UnControlledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (nameRef.current && phoneRef.current) {
      console.log(nameRef.current.value, phoneRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>이름</p>
        <input type="text" name="name" ref={nameRef} />
      </div>
      <div>
        <p>전화번호</p>
        <input type="text" name="phone" ref={phoneRef} />
      </div>
      <button>제출</button>
    </form>
  );
}
