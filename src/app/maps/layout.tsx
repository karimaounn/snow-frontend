export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <div>Maps</div>
        <div>{children}</div>
    </div>
  )
}