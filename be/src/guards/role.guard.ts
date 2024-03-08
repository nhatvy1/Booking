import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { actionEnum } from 'src/modules/permission/permission.entity'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const action = this.reflector.getAllAndOverride<actionEnum>('action', [
      context.getHandler(),
      context.getClass()
    ])

    const subject = this.reflector.getAllAndOverride<string>('subject', [
      context.getHandler(),
      context.getClass()
    ])

    if(!action || !subject) {
      return true
    }

    const { user } = context.switchToHttp().getRequest()
    if (!user) {
      throw new UnauthorizedException()
    }

    return true
  }
}
