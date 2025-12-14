import { Ghost } from "lucide-react";
import store from "@/lib/data/store/MessageStore";
export default function Messages() {
  const messages = store.getMessages();
  console.log(messages);
  return (
    <>
      <div className=" flex min-h-screen mx-2">
        {messages.map((message, index) => {
          return (
            <div className="flex flex-col gap-1 m-2 max-w-md" key={index}>
              <div className="flex  gap-2 items-center ">
                <Ghost className="dark:bg-orange-400 bg-orange-300 rounded-full p-0.5" />
                <p className="dark:bg-blue-500 bg-blue-200 rounded p-2 m-2">
                  <span>{message.message}</span>
                </p>
              </div>
              <small className="text-end">{new Date().toLocaleString()}</small>
            </div>
          );
        })}

        {messages.length === 0 && (
          <p className="m-2 w-full bg-orange-400 rounded flex justify-center items-center max-w-md">
            No messages...! :(
          </p>
        )}
      </div>
    </>
  );
}
