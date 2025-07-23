import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";


enum CallStatus {
   INACTIVE = "INACTIVE",
   CONNECTING = "CONNECTING",
   ACTIVE = "ACTIVE",
   FINISHED = "FINISHED",
}

const Agent = ({ userName }: AgentProps) => {

   // const [messages, setMessages] = useState<SavedMessage[]>([]);
   // const [speaking, isSpeaking] = useState(false);
   // const [lastMessage, setLastMessage] = useState();
   const isSpeaking = true;
   const callStatus = CallStatus.ACTIVE // This should be dynamic based on the call status
   const messages = ["Whats your name",'My name is prepInterview,  nice to meet you']; // Example messages, replace with actual state management
   const lastMessage = messages[messages.length - 1]; // Get the last message from the messages array
   //   const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);

   // useEffect(() => {
   //    setLastMessage(messages[messages.length - 1]);
   // })

   return (
      <>
         <div className="call-view">
            {/* AI Interviewer Card */}
            <div className="card-interviewer">
               <div className="avatar">
                  <Image
                     src="/ai-avatar.png"
                     alt="profile-image"
                     width={65}
                     height={54}
                     className="object-cover"
                  />
                  {isSpeaking && <span className="animate-speak" />}
               </div>
               <h3>AI Interviewer</h3>
            </div>

            {/* User Profile Card */}
            <div className="card-border">
               <div className="card-content">
                  <Image
                     src="/user-avatar.png"
                     alt="profile-image"
                     width={539}
                     height={539}
                     className="rounded-full object-cover size-[120px]"
                  />
                  <h3>{userName}</h3>
               </div>
            </div>
         </div>

         {messages.length > 0 && (
            <div className="transcript-border">
               <div className="transcript">
                  <p

                     key={lastMessage} className={cn("transition-opacity duration-500 opacity-0", "animate-fadeIn opacity-100")}>
                     {lastMessage}
                  </p>
               </div>
            </div>

         )}
         <div className="w-full flex justify-center">
            {callStatus !== "ACTIVE" ? (
               <button>
                  <span>
                     {callStatus === 'INACTIVE' || callStatus === "FINISHED" ? 'CALL' : ". . ."}
                  </span>
               </button>
            ) :
               <button className="btn-disconnect">
                  End</button>}
         </div >
      </>

   )
}

export default Agent
