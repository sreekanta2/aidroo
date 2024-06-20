// export default function Button({ className, props, children }) {
//   return (
//     <button className={`${className}   px-8 py-2 rounded-md`}>
//       {children}
//     </button>
//   );
// }
export default function Button({ className, children }) {
  return (
    <button
      className={`relative flex py-2 w-full px-4 ${className} rounded-md items-center justify-center overflow-hidden    text-gray-700 border border-[#1aa2e1]   transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#1aa2e1] before:text-blue-600 hover:text-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56`}
    >
      <span className="relative z-50"> {children}</span>
    </button>
  );
}
