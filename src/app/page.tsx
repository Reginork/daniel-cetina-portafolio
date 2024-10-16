import Sidebar from './components/organisms/Sidebar';
import MainContent from './components/organisms/MainContent';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <MainContent />
    </div>
  );
}
