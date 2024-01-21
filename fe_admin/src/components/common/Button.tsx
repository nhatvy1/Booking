import Button from '@mui/material/Button'

interface Props {
  text: string
}

const ButtonCustom = ({ text }: Props) => {
  return (
    <Button
      type='submit'
      variant='contained'
      fullWidth
      size='medium'
      sx={{
        borderRadius: '50px',
        background: '#ff385c',
        color: 'white',
        ':hover': {
          background: '#ff385c',
        },
      }}
    >
      {text}
    </Button>
  )
}

export default ButtonCustom
