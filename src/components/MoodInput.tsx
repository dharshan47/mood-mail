import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Props {
  mood: string;
  setMood: (val: string) => void;
  Generate: () => void;
  disabled: boolean;
}

const MoodInput = ({ mood, setMood, Generate, disabled }: Props) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="How you are feeling today(Happy,Sad,Angry)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        required
      />
      <Button
        className="w-full  sm:text-md "
        disabled={disabled}
        onClick={Generate}
      >
        Generate Mail Template
      </Button>
    </div>
  );
};

export default MoodInput;
