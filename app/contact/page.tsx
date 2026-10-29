import type {Metadata} from 'next'; import ContactExperience from '@/components/ContactExperience';
export const metadata:Metadata={title:'Discuss Your Brand Growth Challenge | Curry Nation',description:'Tell Curry Nation what is holding back your growth, from low preference to dealer dependence, packaging, ecommerce economics or leadership gaps.',alternates:{canonical:'/contact/'}};
export default function ContactPage(){return <ContactExperience/>}
