import React from 'react';

import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Nav from '../components/layout/Nav'; 
import Footer from '../components/layout/Footer';




export default function Layout({ children }) {
	return (

		<div className="body-wrap boxed-container">
			<Nav />
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
}
