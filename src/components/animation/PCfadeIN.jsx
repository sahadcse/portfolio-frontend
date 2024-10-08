import { motion } from "framer-motion";

function FadeInWhenVisible({ children , className }) {
  return(
    <motion.div
    className={className}   
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 },
    }}
  >
    {children}
  </motion.div>
  )
}

export default FadeInWhenVisible;