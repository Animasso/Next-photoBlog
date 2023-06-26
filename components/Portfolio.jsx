import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">My Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            width={670}
            height={450}
            src="https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg"
            alt=""
            onClick={() =>
              openModal(
                "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg"
              )
            }
          />
        </div>

        <div className="w-auto h-full mx-auto">
          <Image
            width={215}
            height={160}
            src="https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg"
            alt=""
            onClick={() =>
              openModal(
                "https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg"
              )
            }
          />
        </div>

        <div className="w-auto h-full mx-auto">
          <Image
            width={215}
            height={160}
            src="https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_640.jpg"
            alt=""
            onClick={() =>
              openModal(
                "https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_640.jpg"
              )
            }
          />
        </div>

        <div className="w-auto h-full mx-auto">
          <Image
            width={215}
            height={160}
            src="https://cdn.pixabay.com/photo/2016/11/08/05/31/boys-1807545_1280.jpg"
            alt=""
            onClick={() =>
              openModal(
                "https://cdn.pixabay.com/photo/2016/11/08/05/31/boys-1807545_1280.jpg"
              )
            }
          />
        </div>

        <div className="w-auto h-full mx-auto">
          <Image
            width={215}
            height={160}
            src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            alt=""
            onClick={() =>
              openModal(
                "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
              )
            }
          />
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          {selectedImage && (
            <Image
              width={800}
              height={600}
              src={selectedImage}
              alt="Selected Image"
            />
          )}
          <button className="close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Portfolio;
