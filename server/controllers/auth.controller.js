import User from '../db/models/user.model';
import Response from '../helpers/Response';
import Token from '../helpers/Token';

const socialLogin = async (req, res) => {
  const authenticatedUser = req.user._json;
  const { email, given_name: userName } = authenticatedUser;
  let user = await User.findOne({ email }).exec();
  if (!user) {
    user = await User.create({
      userName,
      email
    });
  }
  const token = Token.generateToken({ user });
  const response = new Response(true, 'Authentication successful', {
    token,
    user
  });
  return res.status(200).json(response);
};

export default { socialLogin };
