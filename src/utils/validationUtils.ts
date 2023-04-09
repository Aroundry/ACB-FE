export const idValidator = (id: string) => {
  if (!id.length) return 'ID를 입력해 주세요';
  if (!(id.length >= 6 && id.length <= 20))
    return 'ID는 6자 이상 20자 이하여야 합니다';
  if (!/^[a-zA-Z0-9]*$/g.test(id))
    return '영문 대소문자, 숫자만 입력이 가능합니다';
  return '';
};

export const passwordValidator = (password: string) => {
  return password.length < 10 || password.length > 100
    ? '비밀번호는 10자 이상 100자 이하여야 합니다'
    : '';
};

export const nameValidator = (name: string) => {
  return name.length < 2 || name.length > 30
    ? '이름은 1자 이상 30자 이하여야 합니다'
    : '';
};

export const phoneNumberValidator = (phoneNumber: string) => {
  if (!phoneNumber.length) return '전화번호를 입력해 주세요';
  if (phoneNumber.length < 12 || phoneNumber.length > 13)
    return '올바른 전화번호를 입력해 주세요';
  return '';
};

export const addressValidator = (address: string) => {
  if (!address.length) return '전화번호를 입력해 주세요';
  if (address.length < 5 || address.length > 50)
    return '올바른 주소를 입력해 주세요';
  return '';
};

export const laundryItemValidator = (laundryItem: string) => {
  if (!laundryItem.length) return '전화번호를 입력해 주세요';
  return '';
};

export const requestMemoValidator = (requestMemo: string) => {
  return requestMemo.length > 50
    ? '요청사항은 50자 이내로 작성할 수 있습니다'
    : '';
};

export const collectionDateValidator = (collectionDate: string) => {
  const today = new Date('2023-03-30T15:06');
  const month = `0${today.getMonth() + 1}`;
  const minTime = `${today.getFullYear()}-${month}-${today.getDate()}T${today.getHours()}:${today.getMinutes()}`;
  console.log(today.toUTCString());
  return '';
};
