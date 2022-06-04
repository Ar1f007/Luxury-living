const splitFirebaseErrorMsg = (string) => {
  return string
    .match(/\((.*)\)/)[1]
    .split('/')[1]
    .split('-')
    .join(' ');
};

export default splitFirebaseErrorMsg;
