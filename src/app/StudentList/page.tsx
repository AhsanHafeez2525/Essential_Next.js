import React from 'react';
import Link from 'next/link';
const StudentList = () => {
	return (
		<div>
			<h1>Student List</h1>
			<ul>
				<li>
					<Link href={'/StudentList/1'}>Ahsan</Link>
				</li>
				<li>
					<Link href={'/StudentList/2'}>Sayyam</Link>
				</li>
				<li>
					<Link href={'/StudentList/3'}>Bilal</Link>
				</li>
				<li>
					<Link href={'/StudentList/4'}>Noman</Link>
				</li>
			</ul>
		</div>
	);
};

export default StudentList;
