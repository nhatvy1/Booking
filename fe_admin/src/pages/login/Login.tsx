import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { CiLock } from 'react-icons/ci'
import { Checkbox, FormControlLabel, Link } from '@mui/material'
import ButtonCustom from '../../components/common/Button'
import { SubmitHandler, useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>()

  const onSubmit: SubmitHandler<ILogin> = (values) => {
    console.log('Check values: ', values)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        maxWidth='xs'
      >
        <Typography component='h1' variant='h5' color='secondary'>
          Dashboard Airbnb
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <CiLock />
        </Avatar>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            label='Email'
            {...register('email', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Địa chỉ email không hợp lệ',
              },
              required: {
                value: true,
                message: 'Vui lòng nhập email',
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== 'airbnb@gmail.com' ||
                    'Hãy thử địa chỉ email khác'
                  )
                },
                notBlacklisted: (fieldValue) => {
                  return (
                    !fieldValue.endsWith('.xyz') ||
                    'Email này không được phép'
                  )
                },
              },
            })}
            helperText={<Typography component='p' color='secondary'>{errors.email?.message}</Typography>}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Password'
            type='password'
            {...register('password', {
              required: {
                value: true,
                message: 'Vui lòng nhập mật khẩu',
              },
            })}
            helperText={<Typography component='p' color='secondary'>{errors.password?.message}</Typography>}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <ButtonCustom text='Đăng nhập' />
          <Grid container mt={2}>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
