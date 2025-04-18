import Wrapper from '@/components/Wrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center">
        <Wrapper>
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold  ">Home Page</h2>
            <p className="text-2xl sm:text-4xl">Coming Soon</p>
          </div>
        </Wrapper>
      </div>
    </>
  )
}
