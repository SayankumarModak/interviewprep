import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dummyInterviews } from '../../constants'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'


const Page = async () => {

  const user = await getCurrentUser();
  const [userInterviews, LatestInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);
  console.log(LatestInterviews)
  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = LatestInterviews?.length > 0;


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

          {
            hasUpcomingInterviews ? (
              LatestInterviews?.map((interview) => (
                <InterviewCard
                  key={interview.id}
                  userId={user?.id}
                  interviewId={interview.id}
                  role={interview.role}
                  type={interview.type}
                  techstack={interview.techstack}
                  createdAt={interview.createdAt}
                />
              ))
            ) : (
              <p>You haven&apos;t taken any interviews yet</p>
            )}



          {/* {dummyInterviews.map((interview) => (<InterviewCard key={interview.id} {...interview} />))} */}
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
