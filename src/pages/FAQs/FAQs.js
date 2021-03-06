import React from 'react'
import Container from "../../components/Container/Container";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const FAQs = () => {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5 }}
      >
        <Container>
          <Col className="">
            <h1>FAQS</h1>
          </Col>
        </Container>
      </motion.div>
    );
}

export default FAQs
