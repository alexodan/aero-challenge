import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { StyledContainer } from "./styles.css";

const Anchor = styled.a`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
`;

const ProductDialog = ({ id, products, setSelectedId }) => {
  const {
    name,
    category,
    img: { hdUrl },
  } = products.find((product) => product._id === id);

  return (
    <StyledContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Anchor onClick={() => setSelectedId(null)} />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{name}</h2>
          </motion.div>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={hdUrl} alt={name} />
          </motion.div>
          <motion.div className="content-container" animate>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Torquent odio
              nisl dictumst est. Augue aenean commodo ullamcorper senectus.
              Potenti habitant quis facilisis lorem.
            </p>
            <p>
              Quam nibh feugiat convallis curae ac nam. Pellentesque varius
              eleifend primis potenti hac pharetra.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </StyledContainer>
  );
};

export default ProductDialog;
