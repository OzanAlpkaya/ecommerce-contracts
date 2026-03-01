import { UserRole } from '../../enums/user-role.enum';

export interface ValidateUserResponse {
  correlationId: string;
  valid: boolean;
  userId?: string;
  email?: string;
  role?: UserRole;
}