import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from '@guesung/constants';
import EmailIcon from '@svgs/email.svg';
import GithubIcon from '@svgs/github.svg';
import LinkedInIcon from '@svgs/linkedIn.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 py-40">
      <div className="flex justify-center gap-10">
        <Link href={GITHUB_URL} target="_blank">
          <GithubIcon width={25} height={25} />
        </Link>
        <Link href={LINKEDIN_URL} target="_blank">
          <LinkedInIcon width={25} height={25} />
        </Link>
        <Link href={EMAIL_URL} target="_blank">
          <EmailIcon width={25} height={25} />
        </Link>
      </div>
      <p className="text-center">© 2024. guesung all rights reserved.</p>
    </footer>
  );
}
