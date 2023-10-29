import enterApp from "@/actions/enterApp"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={enterApp}>
        <span>Enter dokkan-tools as</span>
        <input
          className="border border-neutral-700 mx-4"
          type="text"
          name="username"
          id="username"
        />
        <input
          className="border border-neutral-700 p-1 cursor-pointer"
          type="submit"
          value="enter"
        />
      </form>
    </main>
  )
}
