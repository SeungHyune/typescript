const storage = window.localStorage;

export const setItem = (key: string, value: {}[]) => {
    if(key && value) {
        storage.setItem(key, JSON.stringify(value));
    } else {
        throw new Error('key, value 값을 확인해주세요.')
    }
}

export const getItem = (key: string, defaultValue: string[]) => {
    try {
        return JSON.parse(storage.getItem(key) as string) ?? defaultValue;
    } catch (e) {
        return defaultValue;
    }
}