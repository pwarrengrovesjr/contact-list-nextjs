'use client'
import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter();

  return (
    <div className="container text-center">
        <div className="col position-absolute top-50 start-50 translate-middle">
          <div className="row p-2">
            <h2>
              Welcome to Warren&apos;s Contact List App!
            </h2>
          </div>
          <div className="row d-inline-flex p-2">
            <a className="btn btn-primary" onClick={() => router.push('/contacts')}>Go to Your Contacts</a>
          </div>
        </div>
        
    </div>
  )
}
