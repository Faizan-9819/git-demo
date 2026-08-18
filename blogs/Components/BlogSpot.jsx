// // "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// const BlogSpot = () => {
//   return (
//     <div className="relative bg-[url(/fistfold.png)] bg-cover bg-no-repeat h-[400px] lg:h-screen max-h-screen z-0 overflow-hidden">
//       {/* <div className=""> */}
//       <div className="fix12 pt-[140px] ">
//         <p
//           // initial={{ opacity: 0 }}
//           // whileInView={{ opacity: 1 }}
//           // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           // viewport={{ amount: 0.1, once: true }}
//           className="text-[#D7D7D7A3] text-base fsans-400"
//         >
//           <Link
//             href="/"
//             className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
//           >
//             Home
//           </Link>{" "}
//           &gt; News & Blog
//         </p>
//         <h1
//           // initial={{ width: 0 }}
//           // whileInView={{ width: "fit-content" }}
//           // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           // viewport={{ amount: 0.1, once: true }}
//           className="text-[28px] sm:text-[32px] md:text-[60px] max-w-fit whitespace-nowrap overflow-hidden fpt-500 text-white border-b-[8px] border-[#F7E327] "
//         >
//           Blogs
//         </h1>
//       </div>
//       <img
//         // initial={{ opacity: 0, translateY: "100px" }}
//         // whileInView={{ opacity: 1, translateY: 0 }}
//         // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
//         // viewport={{ amount: 0.1, once: true }}
//         src="/blog/bspot.png"
//         // className="absolute bottom-0 w-full h-[637px]"
//         className="absolute bottom-0 w-full -z-10"
//         alt=""
//       />
//     </div>
//   );
// };

// export default BlogSpot;
// "use client";
import { motion } from "framer-motion";
import Link from "next/link";
const BlogSpot = () => {
  return (
    <div className="relative bg-[#fff] bg-cover bg-no-repeat h-[400px] lg:h-screen max-h-screen z-0 overflow-hidden">
      <div className="fix12 pt-[140px] ">
        <p className="text-[#00000040] text-base fsans-400">
          <Link
            href="/"
            className="hover:text-black transition-colors duration-300 text-[13px] sm:text-base"
          >
            Home
          </Link>{" "}
          &gt; News & Blog
        </p>
        <h1 className="text-[28px] sm:text-[32px] md:text-[60px] max-w-fit whitespace-nowrap overflow-hidden fpt-500 text-black border-b-[8px] border-[#F7E327] ">
          Blogs
        </h1>
      </div>
      <img
        src="/blog/bspot.png"
        className="absolute bottom-0 w-full -z-10"
        alt=""
      />
    </div>
  );
};

export default BlogSpot;
