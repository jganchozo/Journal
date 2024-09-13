import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>

      <Grid2 className='box-shadow'
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>
        <form>
          <Grid2 container>
            <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label='Email'
                type="email"
                placeholder="email@google.com"
                fullWidth />
            </Grid2>

            <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label='Password'
                type="password"
                placeholder="Password"
                fullWidth />
            </Grid2>

            <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }} size={{ xs: 12 }}>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid2>

              <Grid2 container direction={'row'} justifyContent={'end'} size={{ xs: 12 }}>
                <Link component={RouterLink} color={'inherit'} to={'/auth/register'}>
                  Create an account
                </Link>
              </Grid2>

            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  )
}
