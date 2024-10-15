// // src/components/Notification.tsx

// import React from 'react';
// import { cn } from "@/lib/utils";

// interface Item {
//   name: string;
//   description: string;
//   icon: string;
//   color: string;
//   time: string;
// }

// const Notification: React.FC<Item> = ({ name, description, icon, color, time }) => {
//   return (
//     <figure
//       className={cn(
//         "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
//         "transition-all duration-200 ease-in-out hover:scale-[103%]",
//         "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
//         "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-3">
//         <div
//           className="flex size-10 items-center justify-center rounded-2xl"
//           style={{ backgroundColor: color }}
//         >
//           <span className="text-lg">{icon}</span>
//         </div>
//         <div className="flex flex-col overflow-hidden">
//           <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
//             <span className="text-sm sm:text-lg">{name}</span>
//             <span className="mx-1">·</span>
//             <span className="text-xs text-gray-500">{time}</span>
//           </figcaption>
//           <p className="text-sm font-normal dark:text-white/60">
//             {description}
//           </p>
//         </div>
//       </div>
//     </figure>
//   );
// };

// export default Notification;




// src/components/Notification.tsx

"use client";

import React, { useRef } from 'react';
import { cn } from "@/lib/utils";
import useOnScreen from "@/HOOKS/useOnScreen";



interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const Notification: React.FC<Item> = ({ name, description, icon, color, time }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref); // Check if the component is in view

  return (
    <figure
      ref={ref}
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-transform duration-500 ease-in-out transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0" // Animation classes
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-6 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500"></span>
          </figcaption>
          <p className="text-sm dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default Notification;
