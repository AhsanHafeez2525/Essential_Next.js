import Link from 'next/link';
export default function Layout({ children }) {
	return (
		<div>
			<ul>
				<li>
					<Link href='/Login'>Login Main</Link>
				</li>
				<li>
					<Link href='/Login/StudentLogin'>Student Login</Link>
				</li>
				<li>
					<Link href='/Login/CollegeLogin'>Teacher Login</Link>
				</li>
			</ul>
			{children}
		</div>
	);
}
