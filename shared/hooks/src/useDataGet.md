# useDataGet

: 데이터를 패칭하는 훅

## Example

```js
const { data, status } = useDataGet({
  fn: () => customFetchGet(MOCK_SERVER_URL),
  initialData: serverData,
  trigger: [switchValue],
  onSuccess: data => {
    console.log('onSuccess', data);
  },
  onError: error => {
    console.log('onError', error);
  },
});
```

## Options

1. `fn`: 데이터를 패칭하는 함수
2. `initialData`: 초기 데이터 (서버에서 전달받은 데이터 등 초기 값)
3. `trigger` : 데이터를 다시 패칭하기 위한 트리거
4. `onSuccess` : 데이터 패칭 성공 시 실행되는 콜백
5. `onError` : 데이터 패칭 실패 시 실행되는 콜백
