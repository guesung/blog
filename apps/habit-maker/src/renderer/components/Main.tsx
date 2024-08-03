import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getLocalStorage from '../../utils/getLocalStorage';
import setLocalStorage from '../../utils/setLocalStorage';

const HABIT_LIST = ['habit1', 'habit2', 'habit3'];

export default function Main() {
  const navigate = useNavigate();
  const [habitState, setHabitState] = useState(() => {
    const habit1 = getLocalStorage('habit1');
    const habit2 = getLocalStorage('habit2');
    const habit3 = getLocalStorage('habit3');
    return {
      habit1,
      habit2,
      habit3,
    };
  });
  const [cycleState, setCycleState] = useState(() => getLocalStorage('cycle'));

  const handleButton = useCallback(
    (e) => {
      e.preventDefault();
      setLocalStorage('cycle', cycleState);
      HABIT_LIST.forEach((habit) => {
        setLocalStorage(habit, habitState[habit]);
      });
      navigate('/waiting');
    },
    [habitState, cycleState, navigate],
  );

  const handleValueChange = useCallback((e) => {
    const { name, value } = e.target;
    setHabitState((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  }, []);

  const handleCycleChange = useCallback((e) => {
    const { value } = e.target;
    setCycleState(value);
  }, []);

  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-center text-[20px]">습관을 입력해주세요</h1>
      <form className="flex justify-center items-center gap-[20px]">
        <div className="flex justify-center items-center flex-col gap-[20px]">
          {[1, 2, 3].map((index) => (
            <div className="flex gap-[30px] items-center">
              <label htmlFor={`habit${index}`}>습관{index}</label>
              <input
                key={index}
                type="text"
                id={`habit${index}`}
                name={`habit${index}`}
                placeholder="취미를 입력하세요"
                onChange={handleValueChange}
                value={habitState[`habit${index}`] || ''}
                className="rounded-[10px] h-[40px] w-[400px] border-none text-black px-[10px]"
              />
            </div>
          ))}
          <div className="inputBox flex gap-[20px] items-center">
            <label htmlFor="cycle">주기(초)</label>
            <input
              type="text"
              placeholder="주기를 입력하세요 (초)" // 초 단위로 테스트
              onChange={handleCycleChange}
              value={cycleState || ''}
              className="rounded-[10px] h-[40px] w-[400px] border-none text-black px-[10px]"
              id="cycle"
              name="cycle"
            />
          </div>
        </div>
        <button type="submit" onClick={handleButton}>
          제출
        </button>
      </form>
    </main>
  );
}
