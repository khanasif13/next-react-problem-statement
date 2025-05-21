"use client";
import React, { useEffect } from "react";
import useOnlineStatus from "../lib/useOnlineStatus";

const CustomHook = () => {
    const isOnline = useOnlineStatus();
    return (
        <h1>User Online Status - {isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
    )
}

export default CustomHook;