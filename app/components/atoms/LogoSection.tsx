import { ProfileData as data } from "@/config/content"

export const LogoSection = () => {
  return (
    <div className="logosec text-2xl font-medium flex items-center gap-2.5"><span className="text-4xl leading-0"><data.logoIcon /></span> {data.logoText}</div>
  )
}
