"use client";
import React from "react";
import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            console.log("user is online");
        }

        const handleOffline = () => {
            setIsOnline(false);
            console.log("user is offline");
        }

        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);

        return () => {
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    },[]);

    return isOnline;
}

export default useOnlineStatus;