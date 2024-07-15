import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  phone: string;
}

const defaultValues: FormData = {
  name: '',
  phone: '',
};

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <p>이름</p>
        <input
          type="text"
          {...register('name', {
            minLength: {
              value: 10,
              message: '10자 이상 입력해주세요.',
            },
          })}
        />
      </div>
      {formState.errors.name && <p>{formState.errors.name.message}</p>}
      <div>
        <p>전화번호</p>
        <input type="text" {...register('phone')} />
      </div>

      <button>제출</button>
    </form>
  );
}
