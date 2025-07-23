import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import{ ReactNode } from 'react'

const AuthLayout = async({children} : {children : ReactNode}) => {
  // console.log("in the rootlayout:",isAuthenticated)
    const isUserAuthnenticated = await isAuthenticated();
  
    if (isUserAuthnenticated) {
      redirect('/');
    }
  return (
    <div className="auth-layout">
      {children}
    </div>
  )
}

export default AuthLayout
