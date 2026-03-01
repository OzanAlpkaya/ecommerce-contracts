import { UserRole } from '../../enums/user-role.enum.js';

export interface ValidateUserResponse {
  correlationId: string;
  valid: boolean;
  userId?: string;
  email?: string;
  role?: UserRole;
}