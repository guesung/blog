import { Link } from 'react-router-dom';

export default function Waiting() {
  return (
    <div>
      대기 중<Link to="/">설정 화면으로 돌아가기</Link>
    </div>
  );
}
