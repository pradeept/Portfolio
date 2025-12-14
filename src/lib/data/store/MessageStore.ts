class MessageStore {
  store: { message: string; date: Date }[] = [];
  size: number = 0;
  constructor(size: number) {
    this.size = size;
  }

  getMessages() {
    const orderedMessages = this.store.sort(
      (a, b) => a.date.getTime() - b.date.getTime(),
    );
    return orderedMessages;
  }

  addMessage(payload: { message: string; date: Date }) {
    if (this.store.length >= this.size) {
      this.trim();
    }
    this.store.push(payload);
  }

  trim() {
    this.store = this.store.splice(this.size - 1);
  }
}

const store = new MessageStore(100);
export default store;
