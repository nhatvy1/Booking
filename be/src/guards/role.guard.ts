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

    let flag = false

    const { permissions } = user

    for(const key of Object.keys(permissions)) {
      permissions[key].map((item: any)=> {
        if(item === actionEnum.MANAGE && key === 'all') {
          console.log(`Case 1: ${item}, ${subject}`)
          flag = true
        }

        if(item === actionEnum.MANAGE && key === subject) {
          console.log(`Case 2: ${item}, ${subject}`)
          flag = true
        }

        if(item === action && key === subject) {
          console.log(`Case 3: ${item}, ${subject}`)
          flag = true
        }
      })
    }

    if(flag) {
      return true
    }

    throw new UnauthorizedException('Bạn không có quyền truy cập')
  }
}
