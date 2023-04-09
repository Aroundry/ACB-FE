import { atom } from 'recoil';
import UserInfo from 'src/types/UserInfo';

export const userState = atom<UserInfo>({
  key: 'userState',
  default: {
    accessToken: '',
  },
});

export const loggedInState = atom<boolean | null>({
  key: 'loggedInState',
  default: null,
});
