export const logInfo = async (message: string) => {
  const oldLog = (await chrome.storage.local.get('log')).log ?? '';

  const messageWithTimestamp = `[${new Date().toISOString()}]${message}\n\n`;

  const newLog = (oldLog + messageWithTimestamp).substring(0, 10000);

  await chrome.storage.local.set({
    log: newLog,
  });
};

export const getLog = async (): Promise<string> => {
  return (await chrome.storage.local.get('log')).log ?? '';
};
