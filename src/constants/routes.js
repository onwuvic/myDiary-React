const BASE_URL = 'https://tranquil-harbor-77266.herokuapp.com/api/v1';

export const user = {
  LOG_IN_URL: `${BASE_URL}/users/login`,
  SIGN_UP_URL: `${BASE_URL}/users/signup`
};

export const diary = {
  DIARIES_URL: `${BASE_URL}/entries`
};

export const diaryParams = id => ({
  ONE_DIARY_URL: `${BASE_URL}/entries/${id}`
});
