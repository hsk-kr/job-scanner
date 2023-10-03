// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveJsonAsFile = (filename: string, data: any) => {
  const blob = new Blob([JSON.stringify(data)]);
  const link = document.createElement('a');
  link.download = filename + '.json';
  link.href = window.URL.createObjectURL(blob);
  link.click();
};
