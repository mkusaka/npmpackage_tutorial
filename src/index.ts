type U = string | any[] | null;

export function IsNullOrEmpty(arg?: U): boolean {
  if (arg === null || arg === undefined) {
    return true;
  }
  if (typeof arg === "string") {
    return IsNullOrEmptyString(arg);
  } else {
    return IsNullOrEmptyArray(arg);
  }
}

export function IsNullOrEmptyString(str?: string): boolean {
  return str === undefined || str.trim().length === 0;
}

export function IsNullOrEmptyArray(arr?: any[]): boolean {
  return arr === undefined || arr.length === 0;
}

// see https://qiita.com/myzkyy/items/8b1b91e998ef890e868c
export function isArray(obj: any): boolean {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

export function Hi() {
  return "Hi!Ho!";
}
