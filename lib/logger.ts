const DEBUG = true;

export const logger = {
  debug: (...args: any[]) => {
    if (DEBUG) {
      console.log('🔍 DEBUG:', ...args);
    }
  },
  info: (...args: any[]) => {
    console.log('ℹ️ INFO:', ...args);
  },
  error: (...args: any[]) => {
    console.error('❌ ERROR:', ...args);
  }
};
