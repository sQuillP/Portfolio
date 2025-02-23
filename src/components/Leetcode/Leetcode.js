"use client";
import {SWRParams} from '@/utility/leetcode';
import useSWR from 'swr'

// must wrap fetch function for swr integration.
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Leetcode() {

    const { data, error } = useSWR(SWRParams, fetcher);


    console.log(data, error);


    return (
        <div>
            somethign
        </div>
    )



}