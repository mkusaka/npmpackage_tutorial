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
