import { Meta } from '@storybook/react'
import { Typography } from '@/design-system/Typography'

export default {
  title: 'Design System/Typography',
  component: Typography
} as Meta

export const Regular = () => <div>
  <Typography type='h1'>H1.Typography</Typography>
  <Typography type='h2'>H2.Typography</Typography>
  <Typography type='h3'>H3.Typography</Typography>
  <Typography type='h4'>H4.Typography</Typography>
  <Typography type='h5'>H5.Typography</Typography>
  <Typography type='p'>P.Typography</Typography>
</div>

export const Bold = () => <div>
  <Typography type='h1' fontWeight={700} >H1.Typography</Typography>
  <Typography type='h2' fontWeight={700}>H2.Typography</Typography>
  <Typography type='h3' fontWeight={700}>H3.Typography</Typography>
  <Typography type='h4' fontWeight={700}>H4.Typography</Typography>
  <Typography type='h5' fontWeight={700}>H5.Typography</Typography>
  <Typography type='p' fontWeight={700}>P.Typography</Typography>
</div>
