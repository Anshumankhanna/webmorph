// app/not-found.tsx
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <h1>This page is under development currently</h1>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
