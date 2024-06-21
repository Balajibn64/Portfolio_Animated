import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <motion.h1 
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
                }}
              drag="x"
              dragConstraints={{ left: 0, right: 300 }}
              whileDrag={{ scale: 1.2 }}  
              className="font-bold">
              BN PORTFOLIO
            </motion.h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>
            <a href="https://github.com/Balajibn64" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}>
            <a href="mailto:balajibn6464@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
            </a>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}>
            <a href="https://www.linkedin.com/in/balaji-bn-60498a294/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
          </motion.div>
          <motion.div
           whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>
            <a href="https://www.instagram.com/its_my_sign_bn64?igsh=MWo0ajFsNnZkM2doeA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
          </motion.div>
        </div>
      </nav>
 ); 
};

export default Navbar;