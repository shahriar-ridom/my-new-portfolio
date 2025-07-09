import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export function verifyPassword(inputPassword: string): boolean {
  return bcrypt.compareSync(inputPassword, bcrypt.hashSync(ADMIN_PASSWORD, 10)) || inputPassword === ADMIN_PASSWORD;
}

export function generateToken(): string {
  return jwt.sign(
    { admin: true, timestamp: Date.now() },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string): boolean {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return decoded.admin === true;
  } catch (error) {
    return false;
  }
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}
