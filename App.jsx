import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./frontend/src/pages/home/HomePage";
import LoginPage from "./frontend/src/pages/auth/login/LoginPage";
import SignUpPage from "./frontend/src/pages/auth/signup/SignUpPage";
import ProfilePage from "./frontend/src/pages/profile/ProfilePage";
import Dashboard from "./frontend/src/pages/dashboard/Dashboard";
// import TaskManager from './pages/task/TaskManager';
import Connection from './frontend/src/pages/connect/Connect';

import Sidebar from "./frontend/src/components/common/SideBar";
import RightPanel from "./frontend/src/components/common/RightPanel";

import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./frontend/src/components/common/LoadingSpinner";
import Connect from './frontend/src/pages/connect/Connect';

function App() {

  const { data: authUser, isLoading } = useQuery({
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/user");
				const data = await res.json();
				if (data.error) return null;
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				console.log("authUser is here:", data);
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		retry: false,
	});

	if (isLoading) {
		return (
			<div className='h-screen flex justify-center items-center'>
				<LoadingSpinner size='lg' />
			</div>
		);
	}

  return (
    <div className='flex max-w-6xl mx-auto'>
			{authUser && <Sidebar />}
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
				<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
				<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
				<Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
				<Route path='/dashboard' element={authUser ? <Dashboard /> : <Navigate to='/login' />} />
				{/* <Route path='/task' element={authUser ? <TaskManager /> : <Navigate to='/login' />} /> */}
				<Route path='/connect' element={authUser ? <Connection /> : <Navigate to='/login' />} />

			</Routes>
			{authUser && <RightPanel />}
			<Toaster />
		</div>
  )
}


export default App