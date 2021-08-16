import styled from "styled-components";

const padding = "20px";

const ContainerWrapper = styled.div`
  display: flex;

  .sidebar {
    width: auto;
    min-width: 0;
    max-width: 300px;
    padding: ${padding};
    /* padding-top: ${padding};
            padding-bottom: ${padding}; */
    overflow: hidden;
    background-color: #aaa;
    height: 120vh;
    position: sticky;
    top: 0;
    transition: 1s;

    &.show {
      min-width: 300px;
      /* padding: ${padding}; */
    }

    ul.menu {
      .heading {
        font-size: 0.75rem;
        letter-spacing: 1.5px;
        font-family: "Public Sans", sans-serif;
      }
      li {
        a {
          padding: 10px 20px;
          border-radius: 10px;
          background-color: white;
          margin-bottom: 10px;
          display: block;
          transition: 0.3s;

          &:hover {
            background-color: #ccc;
          }

          &.active {
            background-color: blue;
            color: white;
          }
        }
      }
    }
  }
  .rightside {
    flex: 1;

    header {
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 1000;

      .logo {
        height: 40px;
        margin-right: 30px;
      }
    }
    .content {
      padding: ${padding};
    }
  }
`;

export default ContainerWrapper;
