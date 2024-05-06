'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Layout({ children }) {
	const pathName = usePathname();
	console.log(pathName);
	return (
		// <div>
		// 	{pathName !== '/Login/CollegeLogin' ? (
		// 		<ul>
		// 			<li>
		// 				<Link href='/Login'>Login Main</Link>
		// 			</li>
		// 			<li>
		// 				<Link href='/Login/StudentLogin'>Student Login</Link>
		// 			</li>
		// 			<li>
		// 				<Link href='/Login/CollegeLogin'>Teacher Login</Link>
		// 			</li>
		// 		</ul>
		// 	) : null}
		// 	{children}
		// </div>
		<div>
			{pathName !== '/Login/CollegeLogin' ? (
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
			) : (
				<Link href={'/Login'}>Go to main login page</Link>
			)}
			{children}
		</div>
	);
}
