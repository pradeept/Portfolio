import { Send } from "lucide-react";
import store from "@/lib/data/store/MessageStore";

export default function Message() {
  const sendMessage = async (formData: FormData) => {
    "use server";
    const message = formData.get("message");

    if (message && message.toString().trim().length > 0) {
      const formattedMessage = message.toString();
      const date = new Date();
      store.addMessage({ message: formattedMessage, date });
    }
  };
  return (
    <form
      className="flex justify-center items-center gap-2"
      action={sendMessage}
    >
      <input
        type="text"
        placeholder="Drop me a message!"
        className=" py-0.5 px-1 mb-1 text-sm rounded outline-0"
        id="meesage_box"
        name="message"
        maxLength={100}
      />
      <button type="submit">
        <Send className="text-sm" size={18} />
      </button>
    </form>
  );
}
