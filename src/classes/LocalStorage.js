class LocalStorage {

  constructor(STORAGE_KEY){

    this.STORAGE_KEY = STORAGE_KEY;

  }

  /**
   * Loads Items from localStorage
   */
  fetch(){

    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  /**
   * Saves Items in localStorage
   */
  save(items){

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items))

  }
}

export default LocalStorage;
