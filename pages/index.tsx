import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {

  const { data: user } = useCurrentUser();



  return (
    <>
      <h1 className="">Waaadddipp Netflix</h1>
      <p className='text-white'>logged in as {user?.name}</p>
      <button className='bg-white' onClick={() => {signOut()}}>Logout</button>
    </>
  )
}
