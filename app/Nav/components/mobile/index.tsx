import { RemoveScroll } from 'react-remove-scroll'
import Links from '../links'

export default function MobileNavLinks({ show }: { show: boolean }) {
  if (!show) {
    return <></>
  }

  return (
    <RemoveScroll
      enabled
      className="md:hidden flex absolute w-full h-screen inset-0 gap-8 items-center top-20 bg-slate-300 container flex-col pt-14"
    >
      <Links />
    </RemoveScroll>
  )
}
