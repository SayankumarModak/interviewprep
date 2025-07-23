import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dummyInterviews } from '../../constants'
import InterviewCard from '@/components/InterviewCard'

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get interview ready with AI powered pratice & feedback</h2>
          <p className="text-lg">
            Pratice on real interiew questoins & get instant feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start an interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt='robot-dude' width={400} height={400} className='max-sm:hidden' />

      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (<InterviewCard key={interview.id} {...interview} />))}
          {/* <p>You havenot taken any interviews yet</p> */}
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (<InterviewCard {...interview} key={interview.id} />))}
        </div>
      </section>
    </>
  )
}

export default Page
