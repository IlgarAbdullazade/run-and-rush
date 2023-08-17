import AccountView from '@/views/Account'

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AccountView>{children}</AccountView>
}
