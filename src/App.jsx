import React, { useState } from "react";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [onClickOpenModal, setOnClickOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOnClickOpenModal(true)}>Open Modal</button>
      <Modal isOpen={onClickOpenModal} onClose={() => setOnClickOpenModal(false)}>
        <div>Test Modal</div>
      </Modal>
    </>
  );
};

export default App;
