import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface Props {
  subject: string;
  message: string;
  reset: () => void;
}

const MoodOutput = ({ subject, message, reset }: Props) => {
  return (
    <div className="space-y-4">
      <div>
        <label>Subject:</label>
        <Input value={subject} readOnly />
      </div>
      <div>
        <label>Message:</label>
        <Textarea value={message} readOnly />
      </div>
      <Button variant="destructive" className="w-full" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default MoodOutput;
