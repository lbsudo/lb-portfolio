import React from 'react'
import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <>
      <footer className="w-1/2 flex items-center justify-center ">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">2024 Lawrence Brown. All rights reserved.</span>
        </Link>
      </footer>
    </>
  )
}
