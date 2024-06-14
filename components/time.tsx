"use client";
import { DateTime } from 'luxon';
import { useState, useEffect } from 'react';

export default function Time() {
  const [time, setTime] = useState(DateTime.now().toFormat('Z HH:mm'));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.now().toFormat('Z HH:mm'));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>GMT{time}</>
  )
}