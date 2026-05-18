/**
 * Singleton service for managing localStorage operations.
 * 
 * @class LocalStorageService
 * @date 2026-05-09
 */
export class LocalStorageService {
  private static instance: LocalStorageService;

  private constructor() {}

  /**
   * Returns the singleton instance of LocalStorageService.
   * @returns {LocalStorageService} The singleton instance.
   */
  static getInstance(): LocalStorageService {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }
    return LocalStorageService.instance;
  }

  /**
   * Retrieves a value from localStorage by key.
   * @template T
   * @param {string} key - The storage key.
   * @returns {T | null} The parsed value or null if not found.
   */
  get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch {
      return item as T;
    }
  }

  /**
   * Stores a value in localStorage.
   * @template T
   * @param {string} key - The storage key.
   * @param {T} value - The value to store.
   */
  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Removes a value from localStorage by key.
   * @param {string} key - The storage key to remove.
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all localStorage entries.
   */
  clear(): void {
    localStorage.clear();
  }
}
