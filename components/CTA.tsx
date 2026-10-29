import Link from 'next/link'; import { ArrowUpRight } from 'lucide-react';
export default function CTA({label='Tell us what is holding growth back',href='/contact/',light=false}:{label?:string;href?:string;light?:boolean}){return <Link className={`button ${light?'button-light':''}`} href={href}>{label}<ArrowUpRight size={17}/></Link>}
