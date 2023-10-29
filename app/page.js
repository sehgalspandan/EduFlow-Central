import Image from 'next/image'
import QuestionInput from '@/components/Question_Input'
import Navigation from '@/components/Navigation'
import WebsiteGuide from '@/components/Info'


export default function Home() {
  return (
    <> 
     <Navigation/>
    <QuestionInput/>
    <WebsiteGuide/>
    </>
  )
}
