import SideMenu from "@/components/side-menu"
import MobileMenu from "@/components/mobile-menu"

export default function WorkWithMe() {
  return (
    <div className="flex h-full">
      <SideMenu />
      <div className="w-full lg:w-3/4 absolute lg:left-1/4 lg:p-10 p-5">
        <MobileMenu />
        <div>

        </div>
      </div>
    </div>
  )
}