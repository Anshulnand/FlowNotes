import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { motion } from "motion/react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Card = ({ id, onClose, containerRef }) => {
  const [text, setText] = useState(""); // Define text state
  const [isFocused, setIsFocused] = useState(false); // Track focus state of the textarea

  const handleTextChange = (e) => {
    setText(e.target.value); // Update the text state as user types
  };

  return (
    <motion.div
      drag={!isFocused} // Disable dragging if the textarea is focused
      whileHover={{
        scale: 1.05,
      }}
      // Cards are absolutely positioned
      // Added dragConstraints prop to limit dragging within the container
      dragConstraints={containerRef} // Restricts dragging to the container's boundaries
      whileDrag={{ scale: 1.15 }}
      dragMomentum={false}
      className="w-56 h-72 bg-zinc-900 rounded-3xl overflow-hidden px-6 py-5 cursor-pointer absolute hover:border-2 hover:border-yellow-400 border border "
    >
      <div className="flex justify-between items-center">
        <GrPowerReset
          onClick={() => setText("")}
          className="text-white text-3xl *:transition-all ease-in-out hover:text-yellow-400"
        />
        <p className="px-4 py-2 text-black hover:text-white rounded-full bg-yellow-400">{id}</p>
        <IoMdCloseCircleOutline
          onClick={onClose} // Call the onClose function passed from Foreground
          className="text-3xl cursor-pointer hover:text-red-600"
        />
      </div>

      {/* Text area for editing note */}
      <textarea
        className="w-full h-36 bg-transparent text-white border-none focus:outline-none resize-none mt-5"
        value={text}
        onChange={handleTextChange} // Handle text changes
        placeholder="Write your notes here..."
        onFocus={() => setIsFocused(true)} // Set focus state to true when textarea is focused
        onBlur={() => setIsFocused(false)} // Reset focus state when textarea loses focus
      />
    </motion.div>
  );
};

export default Card;
