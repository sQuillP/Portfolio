import { redirect } from 'next/navigation';


export default function NotFound() {
    //Wrong page there
    redirect('/');
}