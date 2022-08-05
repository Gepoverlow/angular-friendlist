export class Friend {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _favouriteLanguage: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    favouriteLanguage: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._favouriteLanguage = favouriteLanguage;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(newName: string) {
    this._firstName = newName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(newName: string) {
    this._lastName = newName;
  }

  get email(): string {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(newPhone: string) {
    this._phoneNumber = newPhone;
  }

  get favouriteLanguage(): string {
    return this._favouriteLanguage;
  }

  set favouriteLanguage(newLang: string) {
    this._favouriteLanguage = newLang;
  }
}
