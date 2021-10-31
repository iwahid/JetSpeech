import React from 'react';
import { io, Socket } from 'socket.io-client';
import { SERVER_URL } from '../utils/config';

export const useSocket = () => {
  const socketRef = React.useRef<Socket>();

  if (!socketRef.current) {
    socketRef.current = typeof window !== 'undefined' && io(SERVER_URL);
  } else {
    socketRef.current.connect();
  }

  React.useEffect(() => {
    return () => {
      if (socketRef.current) {
        console.log('disconnect!!!');
        socketRef.current.disconnect();
      }
    };
  }, []);

  return socketRef.current;
};
