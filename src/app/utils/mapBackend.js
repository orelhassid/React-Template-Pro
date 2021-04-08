export const mapUserObject = (user) => {
  if (!user) return {};
  return {
    email: user.email,
    emailVerified: user.emailVerified,
    name: user.displayName,
    uid: user.uid,
    profileImage: user.photoURL,
  };
};
