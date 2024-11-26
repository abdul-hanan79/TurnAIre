"use client";
import React, { useState, useEffect  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Plane,
  Utensils,
  Send,
  ArrowLeft,
  Star,
  Hotel,
  Search,
  Car,
  Bus,
  ReceiptText,
} from "lucide-react";
import AiAssisant from "../../../../public/icons/AiAssitant.jpeg";
import profilePic from "../../../../public/icons/avatar.jpg" 
// ... (previous mock data remains the same)
// Mock data (would be replaced with actual API calls)
const TRAVEL_SECTIONS = [
  {
    id: "locations",
    icon: MapPin,
    title: "Travel Locations",
    description: "Explore destinations",
  },
  {
    id: "Book Flight",
    icon: Plane,
    title: "Book Flight",
    description: "Book flights",
  },
  {
    id: "Book Hotel",
    icon: Hotel,
    title: "Book Hotel",
    description: "Book Hotel",
  },
  {
    id: "Book Vehicle",
    icon: Car,
    title: "Vehicle",
    description: "Vehicle",
  },
  {
    id: "food",
    icon: Utensils,
    title: "Local Cuisine",
    description: "Discover local restaurants",
  },
  {
    id: "Invoice",
    icon: ReceiptText,
    title: "Invoice",
    description: "Discover local restaurants",
  },
];



export const TravelAssistant: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("locations");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [messages, setMessages] = useState<
    { text: string; type: "user" | "system" }[]
  >([]);
  const [inputMessage, setInputMessage] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");

  useEffect(() => {
    const fullText = "Ready to plan your vacation?";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setPlaceholderText((prev) => fullText.slice(0, index + 1)); // Take a substring
        index++;
      } else {
        clearInterval(typingInterval); // Stop interval when complete
      }
    }, 50); // Adjust typing speed

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  // Transition variants
  const chatBoxVariants = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setMessages([
        ...messages,
        { text: searchInput, type: "user" },
        {
          text: "Great choice! Would you like to explore locations, transportation, or dining options?",
          type: "system",
        },
      ]);
  
      setIsChatOpen(true);
      setSearchInput("");
    }
  };


  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        { text: inputMessage, type: "user" },
        {
          text: "I'm processing your request...",
          type: "system",
        },
      ]);
      setInputMessage("");
    }
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocations((prev) =>
      prev.includes(locationId)
        ? prev.filter((id) => id !== locationId)
        : [...prev, locationId]
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case "locations":
        return (
          <motion.div
            key="locations"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-4"
          >
            <h3 className="text-xl font-bold mb-4 italic text-green-900">Ready for an Epic Adventure?</h3>
            <div className="flex-grow overflow-y-auto bg-gray-100 p-4 space-y-3">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-3 rounded-lg max-w-[80%] flex items-center  ${
                    msg.type === "user"
                      ? "bg-green-100 self-end ml-auto"
                      : "bg-white self-start mr-auto"
                  }`}
                >
              {msg.type == 'user' ? (
                 <Image 
                 src={profilePic}
                 alt="AI Travel"
                 width={100}
                 height={100}
                 className="w-12 mr-2 rounded-full"
                 />):  (<Image 
                  src={AiAssisant}
                  alt="AI Travel"
                  width={100}
                  height={100}
                  className="w-10 mr-2 rounded-full"
                  />) }
                 
                  {msg.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      // ... (other sections remain the same, just wrap in motion.div with similar variants)
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full">
      {/* Initial Search Input */}
      <motion.form initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }}
      onSubmit={handleSearch}>
        
        <div className="relative">
        <input
        id="searchInput"
        type="text"
        placeholder={placeholderText}
        className="px-2.5 py-4 mt-4 text-base flex items-center text-gray-500 bg-white rounded-xl border border-green-800 border-solid min-h-[48px] w-full pl-10"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

      </motion.form>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            key="chat-box"
            variants={chatBoxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-white flex flex-col h-full w-full"
          >
            {/* Full-Screen Chat Header */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center p-4 bg-green-700 text-white"
            >
              <button onClick={handleSearch} className="mr-4 flex items-center">
                <ArrowLeft size={24} />
              </button>
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">Travel Assistant</h2>
                <p className="text-sm text-green-100">Plan your perfect trip</p>
              </div>
            </motion.div>

            {/* Navigation Tabs with Transitions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-around bg-white shadow-sm py-2"
            >
              {TRAVEL_SECTIONS.map((section) => (
                <motion.button
                  key={section.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex flex-col items-center p-2 ${
                    activeSection === section.id
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500"
                  }`}
                >
                  <section.icon size={24} />
                  <span className="text-xs mt-1">{section.title}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Dynamic Content Area with Transitions */}
            <AnimatePresence mode="wait">
              <div className="flex-grow overflow-y-auto bg-gray-100">
                {renderSection()}
              </div>
            </AnimatePresence>

            {/* Input Area with Transition */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-4 border-t flex items-center"
            >
              <input
                type="text"
                placeholder="Ask about your trip..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow mr-2 p-2 bg-gray-100 rounded-full"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSendMessage}
                className="bg-green-700 text-white  p-4  flex justify-center rounded-full"
              >
                <Send className="rotate-45" size={30} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelAssistant;
