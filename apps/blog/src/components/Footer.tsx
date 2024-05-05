import GithubIcon from '@svgs/github.svg';
import EmailIcon from '@svgs/email.svg';
import InstagramIcon from '@svgs/instagram.svg';
import LinkedInIcon from '@svgs/linkedIn.svg';
import Link from 'next/link';
import {
  EMAIL_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from '@guesung/constants';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 py-40">
      <div className="flex justify-center gap-10">
        <Link href={GITHUB_URL}>
          <GithubIcon width={25} height={25} />
        </Link>
        <Link href={LINKEDIN_URL}>
          <LinkedInIcon width={25} height={25} />
        </Link>
        <Link href={INSTAGRAM_URL}>
          <InstagramIcon width={25} height={25} />
        </Link>
        <Link href={EMAIL_URL}>
          <EmailIcon width={25} height={25} />
        </Link>
      </div>
      <p className="text-center">© 2024. guesung all rights reserved.</p>
    </footer>
  );
}
