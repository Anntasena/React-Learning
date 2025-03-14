import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

//= Styles ==============================
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

/*
$ REACT PORTAL
  > React portal adalah fitur yang pada dasarnya memungkinkan kita untuk me-render sebuah elemen diluar struktur DOM komponen induk sambil tetap mempertahankan elemen tersebut pada posisi asli component tree
  > Dengan kata lain react portal dapat me-render komponen di tempat manapun yang kita inginkan di DOM tree, namun tetap membiarkan komponen tersebut berada di tempat yang sama di komponen tree dalam react dan kemudian, berbagai props tetap berfungsi secara normal
  > Jadi, ini sangat bagus dan umum digunakan untuk semua elemen yang kita ingin tetap berada diatas elemen lainnya

  + Cara pemggunaann
  > createPortal saat return komponen
*/

//= Components ==========================
function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark></HiXMark>
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
