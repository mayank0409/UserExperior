import UserExperior from 'react-native-userexperior';

export const userExperiorMaskView = view => {
  console.log(view);
  if (view !== null) {
    UserExperior.addInSecureViewBucket(view);
  }
};
