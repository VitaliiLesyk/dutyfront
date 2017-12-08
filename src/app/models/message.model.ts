export class Message {
  private type: string;
  private text: string;
  constructor(text: string, type: string) {
    this.type = type;
    this.text = text;
  }
  public getText() {
    return this.text;
  }
  public getType() {
    return this.type;
  }
  public setText(text: string) {
    this.text = text;
  }
  public show() {
    window.setTimeout(() => {
      this.text = '';
    }, 5000);
  }
}
