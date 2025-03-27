import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Strata Management System</h1>
      <nav>
        <ul>
          <li><Link href="/committee">Committee Members</Link></li>
          <li><Link href="/maintenance">Maintenance Requests</Link></li>
          <li><Link href="/finance">Financial Reports</Link></li>
          <li><Link href="/vote">Voting</Link></li>
        </ul>
      </nav>
    </div>
  );
}