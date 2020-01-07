export class MatSelectItem {
  value: string;
  viewValue?: string;
  constructor(
    value: string,
    viewValue?: string) {
      this.value = value;
      // if no viewValue was passed in, use the value from value
      this.viewValue = viewValue ? viewValue : value;
  }
}
