import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Response from './Response';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

class Token {
  static generateToken(payload, secret = jwtSecret, ttl = '24h') {
    const token = jwt.sign(payload, secret, { expiresIn: ttl });
    return token;
  }

  static verifyToken(req, res, next) {
    try {
      const authorizationHeader = req.get('authorization');
      if (!authorizationHeader) {
        const response = new Response(false, 'No token found');
        return res.status(401).json(response);
      }

      const token = authorizationHeader.split(' ')[1];
      const decoded = jwt.verify(token, jwtSecret);
      req.user = { ...decoded.user };
      return next();
    } catch (error) {
      const response = new Response(false, 'Invalid token');
      res.status(401).json(response);
    }
  }
}

export default Token;
