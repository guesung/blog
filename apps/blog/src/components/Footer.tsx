import GithubIcon from '@svgs/github.svg';
import EmailIcon from '@svgs/email.svg';
import InstagramIcon from '@svgs/instagram.svg';
import LinkedInIcon from '@svgs/linkedIn.svg';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 py-40">
      <div className="flex justify-center gap-10">
        <GithubIcon width={25} height={25} />
        <LinkedInIcon width={25} height={25} />
        <InstagramIcon width={25} height={25} />
        <EmailIcon width={25} height={25} />
      </div>
      <p className="text-center">© 2024. guesung all rights reserved.</p>
    </footer>
  );
}
