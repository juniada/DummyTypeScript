export async function simulateAsyncProcessing(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data processed successfully!');
    }, 1000);
  });
}