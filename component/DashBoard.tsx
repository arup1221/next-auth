"use client";
import { signIn, useSession, signOut } from 'next-auth/react'
import React from 'react';

const Dashboard = () => {
    const { data: session } = useSession();

    return (
        <>
            {session ? (
                <>
                    <h1>Welcome Back</h1>
                    <button onClick={() => signOut()} >Sign Out</button>
                </>
            ) : (
                <>
                    <h1>You are not login</h1>
                    <button onClick={() => signIn("google")} >Sign in google</button>

                </>
            )
            }
        </>
    )
}
export default Dashboard;