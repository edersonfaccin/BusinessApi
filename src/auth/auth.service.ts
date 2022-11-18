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
        const salt = await bcrypt.genSalt(8)
        return await bcrypt.hash(password, salt)
    }

    async comparePasswords(newPassword: string, passwordHash: string): Promise<boolean>{
        return await bcrypt.compare(newPassword, passwordHash);
    }
}
