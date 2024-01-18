import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  BASE_WEB_SOCKET_URL,
  CHECKOUT_PATH,
} from "../../../lib/constants/settings";

const useOrderTracking = (orderId?: string) => {
  const socketRef = useRef<WebSocket | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (orderId) {
      const socket = new WebSocket(`${BASE_WEB_SOCKET_URL}/${orderId}`);
      socketRef.current = socket;

      const handleOpen = (event: Event) => {
        console.log("Connected with server:", event);
      };
      const handleMessage = (event: MessageEvent) => {
        console.log("Message from server:", event.data);
        // router.push(CHECKOUT_OK_PATH)
        // router.push(CHECKOUT_KO_PATH)
      };
      const handleClose = (event: CloseEvent) => {
        console.log("Disconnected with server:", event);
        router.push(CHECKOUT_PATH);
      };

      socket.addEventListener("open", handleOpen);
      socket.addEventListener("message", handleMessage);
      socket.addEventListener("close", handleClose);

      return () => {
        socket.removeEventListener("open", handleOpen);
        socket.removeEventListener("message", handleMessage);
        socket.removeEventListener("close", handleClose);
        socket.close();
      };
    }
  }, [orderId]);

  return socketRef.current;
};

export default useOrderTracking;
