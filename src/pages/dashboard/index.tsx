import { Dashboard as DashboardTemplate } from '@/templates/Dashboard'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Dashboard = () => {
  let router = useRouter();

  useEffect(() => {
    let token = sessionStorage.getItem('Token')

    if(!token) {
      router.push('/login')
    }
  }, [])


  return <DashboardTemplate />
}

export default Dashboard