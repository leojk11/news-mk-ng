import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class StorageService {

  localStorage!: Storage;
  private inMemoryStorage: { [key: string]: any } = {};

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    if (isPlatformBrowser(platformId)) {
      this.localStorage = window.localStorage;
    } else {

    }
  }

  /**
   * Check if local storage is supported
   * @returns boolean
   */
  isSupported(): boolean {
    return false;
    // try {
    //   console.info('Local Storage is supported.');
    //   const testKey = '__some_random_key_you_are_not_going_to_use__';
    //   this.localStorage.setItem(testKey, testKey);
    //   this.localStorage.removeItem(testKey);
    //   return true;
    // } catch (e) {
    //   console.warn('Local Storage is not supported switch to inMemory storage');
    //   return false;
    // }
  }

  /**
   * Get a specific item by key name
   * @param name string The name of the item in local storage
   * @return mixed string|null
   */
  getItem(name: string): string | null {
    if (this.isSupported()) {
      return this.localStorage.getItem(name);
    }

    if (this.inMemoryStorage.hasOwnProperty(name)) {
      return this.inMemoryStorage[name];
    }

    return null;
  }

  /**
   * Get specific ITem by index
   * @param index number The index of the element
   * @return mixed string|null
   */
  key(index: number): string | null {
    if (this.isSupported()) {
      return this.localStorage.key(index);
    }

    if (this.inMemoryStorage[index]) {
      return this.inMemoryStorage[index];
    }

    return null;
  }

  /**
   * Remove an item from local storage of the browser
   * @param name the key of the item in local storage
   * @return void
   */
  removeItem(name: string): void {
    if (this.isSupported()) {
      this.localStorage.removeItem(name);
    } else {
      delete this.inMemoryStorage[name];
    }
  }

  /**
   * Set value of an item w
   * @param name the key name
   * @param value the value for specified key {name}
   * @return void
   */
  setItem(name: string, value: string): void {
    if (this.isSupported()) {
      this.localStorage.setItem(name, value);
    } else {
      this.inMemoryStorage[name] = value;
    }
  }

  /**
   * Clear the whole local storage
   * @return void
   */
  clear(): void {
    if (this.isSupported()) {
      this.localStorage.clear();
    } else {
      this.inMemoryStorage = {};
    }
  }
}
