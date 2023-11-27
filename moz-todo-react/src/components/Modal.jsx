import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const Modalz = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cat, setCat] = useState([]);

  const fetchCat = async () => {
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");

      console.log(res.data);
      setCat(res.data);
    } catch (err) {
      console.error(err);
      setCat("Error getting dem cats");
    }
  };

  <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
  <div className="map">
    {" "}
    <div className="modalCat">
      {cat.length > 2 && <img src={cat[0].url} alt="cat" />}
    </div>
  </div>

  <button onClick={() => setModalOpen(false)}>Close Modal</button>
</Modal>

  useEffect(() => {
    fetchCat();
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          fetchCat();
          setModalOpen(true);
        }}
      >
        Open Modal
      </button>

    </div>
  );
};
