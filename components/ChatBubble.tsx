import Image from "next/image";

function ChatBubble({
  message,
  person,
  time,
}: {
  message: string;
  person: string;
  time: string;
}) {
  return (
    <div className="m-4 flex items-start gap-2.5">
      <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-lg rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {person}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {time}
          </span>
        </div>
        <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">
          {message}
        </p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Read
        </span>
      </div>
    </div>
  );
}

export default ChatBubble;
