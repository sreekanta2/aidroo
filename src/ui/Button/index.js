// export default function Button({ className, props, children }) {
//   return (
//     <button className={`${className}   px-8 py-2 rounded-md`}>
//       {children}
//     </button>
//   );
// Button.js
export default function Button({ className, children }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-primary hover:text-white ${className} duration-100 ease-linear`}
    >
      {children}
    </button>
  );
}
