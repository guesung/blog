import { useState } from 'react';

export default function ControlledForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'phone') {
      setPhone(value);
    }
  };

  return (
    <form>
      <div>
        <p>이름</p>
        <input type="text" name="name" value={name} onChange={handleInput} />
      </div>
      <div>
        <p>전화번호</p>
        <input type="text" name="phone" value={phone} onChange={handleInput} />
      </div>
      <button>제출</button>
    </form>
  );
}
