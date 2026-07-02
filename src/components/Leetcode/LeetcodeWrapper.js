'use client'; // This forces the wrapper itself to be evaluated on the client

import dynamicImport from 'next/dynamic';

// This is safe here because this wrapper is a Client Component
const LeetcodeClient = dynamicImport(() => import("@/components/Leetcode/Leetcode"), {
  ssr: false, 
});

export default function LeetcodeWrapper() {
  return <LeetcodeClient />;
}
