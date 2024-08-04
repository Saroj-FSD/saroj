import { useState } from "react";
import Card from "./components/card";
import Modal from "./components/model";
import { RxCross2 } from "react-icons/rx";
import AddProductForm from "./forms/addProduct";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {openModal ? (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <RxCross2
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>
            <AddProductForm />
            {/* <h1>Hi I am form</h1> */}
          </div>
        </Modal>
      ) : null}
      <div className="border-b-2 border-black">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-yellow-400 rounded-md p-2 m-4 text-white bold"
        >
          Add new product
        </button>
      </div>
      <Card />
    </div>
  );
}
export default App;
