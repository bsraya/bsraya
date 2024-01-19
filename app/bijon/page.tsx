import Flow from '@/components/flow';
import Header from '@/components/header';

export default function Bijon() {
  return (
    <div className="flex flex-col gap-10 lg:p-10 p-5">
      <Header />
      <Flow />
    </div>
  )
}