import { motion, useScroll } from "framer-motion"

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}
export default ScrollBar;