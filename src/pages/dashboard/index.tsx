import { Dashboard as DashboardTemplate } from '@/templates/Dashboard'
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

const Dashboard = () => {
  let router = useRouter();

  useLayoutEffect(() => {
    let token = sessionStorage.getItem('Token')

    if(!token) {
      router.push('/register')
    }
  }, [])


  return <DashboardTemplate />
}

export default Dashboard