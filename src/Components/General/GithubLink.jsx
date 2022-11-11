import { Link } from "@mui/material";

export default function GithubLink({url, text}){
  return (
    <>
      Link naar de Github repo van dit project met de code & screenshots: <Link href={url} target="_blank" rel="noopener" underline="hover">{text}</Link>.
    </>
  );
}