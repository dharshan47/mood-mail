import MoodInput from "@/components/MoodInput";
import MoodOutput from "@/components/MoodOutput";
import { useState } from "react";

const Home = () => {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [generate, setGenerate] = useState(false);

  const handleGenerate = () => {
    const lowerMood = mood.toLocaleLowerCase();
    if (lowerMood === "") return;
    if (lowerMood.includes("happy")) {
      setSubject("I am so happy today");
      setMessage(
        "I feel really good today and wanted to share my happiness with you."
      );
    } else if (lowerMood.includes("sad")) {
      setSubject("Feeling sad today");
      setMessage("I am not feeling good today.I hope tomorrow will be better.");
    } else if (lowerMood.includes("angry")) {
      setSubject("I am upset");
      setMessage("Something made me angry today, and I just needed to say it.");
    }
    setGenerate(true);
  };

  const handleReset = () => {
    setMood("");
    setSubject("");
    setMessage("");
    setGenerate(false);
  };

  return (
    <div className="bg-white rounded-md shadow-lg p-4 xs:p-6 sm:p-8 mx-auto mt-20 space-y-4 max-w-xs xs:max-w-sm sm:max-w-md  md:max-w-lg lg:max-w-xl font-sans border-2 ">
      <h1 className="font-bold text-xl sm:text-2xl text-center">
        MoodMail Generator
      </h1>
      {!generate ? (
        <MoodInput
          mood={mood}
          setMood={setMood}
          Generate={handleGenerate}
          disabled={generate}
        />
      ) : (
        <MoodOutput subject={subject} message={message} reset={handleReset} />
      )}
    </div>
  );
};

export default Home;
