import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OptionSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Aidroo sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="recent">Most Recent</SelectItem>
          <SelectItem value="relevant">Relevant</SelectItem>
          <SelectItem value="verified">Verified</SelectItem>
          <SelectItem value="toprated">Top Rated</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
