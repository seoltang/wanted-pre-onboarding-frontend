import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<div>Main</div>} />
				<Route path="/auth" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
