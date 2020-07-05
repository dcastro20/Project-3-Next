// take only needed user fields to avoid sensitive ones (such as password)
export function extractUser(req) {
  console.log('extractUser');
  if (!req.user) return null;
  const {
    _id, name, email, first_name, last_name, bio, profilePicture, emailVerified,
  } = req.user;
  return {
    _id, name, email, first_name, last_name, bio, profilePicture, emailVerified,
  };
}
