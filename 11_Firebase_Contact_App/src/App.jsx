import "./App.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Contactcard from "./components/Contactcard";
// import Model from "./components/Model";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";


function App() {
  const [contacts, setContacts] = useState([]);

  // const [isOpen,setOpen] = useState(false);

  // const onOpen = () =>{
  //   setOpen(true);
  // }
  // const onClose = () =>{
  //   setOpen(false);
  // }
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        // const contactSnapshot = await getDocs(contactRef);

        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(contactList);
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts");
    // const contactSnapshot = await getDocs(contactRef);

    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContact = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContact);

      return filteredContact;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-3xl text-white absolute ml-1" />
            <input
            onChange={filterContacts}
              type="text"
              className="border border-white bg-transparent rounded-md h-10 flex-grow text-white pl-9"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {contacts.length <= 0 ? <NotFoundContact/>:
            contacts.map((contact) => (
            <Contactcard key={contact.id} contact={contact} />
          ))
          }
        </div>
      </div>

      {/* model */}

      {/* <Model isOpen={isOpen} onClose={onClose}>Hi</Model> */}
      <AddAndUpdateContact
        isOpen={isOpen}
        onClose={onClose}
      ></AddAndUpdateContact>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
