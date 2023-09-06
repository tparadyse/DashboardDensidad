import { PT_Sans } from 'next/font/google'

const sans = PT_Sans({ subsets: ['latin'], weight: '400' })

function Home(){
  return(
    <div className="bg-c6 h-screen w-full">
      <h1 className={`${sans.className} text-center text-4xl text-c4`}>HOME</h1>
    </div>
  );
}

export default Home;