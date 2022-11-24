import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService
    ) {}

    generateJWT(user: any): any {
        const payload = { email: user.email, sub: user._id.toString() };
        const token = this.jwtService.sign(payload)

        return {
            _id: user?._id,
            email: user?.email,
            name: user?.name,
            access_token: token
        };
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 8)
    }

    async comparePasswords(newPassword: string, passwordHash: string): Promise<boolean>{
        return true//await bcrypt.compare(newPassword, passwordHash);
    }
}
