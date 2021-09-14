import styled from "styled-components";
import { Colors, MediaQueries } from "../../constants";

export const StyledContainer = styled.div`
  .card-content-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;
  }

  .card-content-container.open {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    padding: 40px 0;
  }

  .card-content {
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    background: #1c1c1e;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .open .card-content {
    height: auto;
    max-width: 700px;
    overflow: hidden;
    pointer-events: none;
    color: white;
  }

  .card-open-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .card-image-container {
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    ${MediaQueries.FromTablet} {
      height: 505px;
    }
    img {
      width: 100%;
    }
  }

  .open .card-image-container,
  .open .title-container {
    z-index: 1;
  }

  .title-container {
    color: ${Colors.Primary};
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: 300px;
  }

  .open .title-container {
    top: 30px;
    left: 30px;
  }

  h2 {
    margin: 8px 0;
  }

  .category {
    font-size: 14px;
    text-transform: uppercase;
  }

  .overlay {
    z-index: 1;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    will-change: opacity;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }

  .overlay a {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
  }

  .content-container {
    padding: 15px 35px 35px 35px;
    max-width: 700px;
    ${MediaQueries.FromMobile} {
      width: 90vw;
      padding: 30px 35px 35px 35px;
    }
    p {
      margin-top: 20px;
    }
  }
`;
