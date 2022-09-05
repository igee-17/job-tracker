import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    /* inset: 0; */
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    height: 100vh;
    border-radius: var(--borderRadius);
    z-index: -1;
    opacity: 0;
    transform: translateX(-100%);
    /* transition: var(--transition); */
    transition: all 0.35s ease-out 0s;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    transform: translateX(0);
  }
  .content {
    /* background: var(--white); */
    background: rgba(255, 255, 255, 0.8);

    width: 65vw;
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
    transition: var(--transition);
  }
  .close-btn:hover {
    color: rgba(217, 49, 37, 0.7);
    transition: var(--transition);
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  }
`;
export default Wrapper;
