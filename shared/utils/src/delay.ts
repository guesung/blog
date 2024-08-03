export const delay = (time: number): Promise<string> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('time out');
    }, time);
  });
