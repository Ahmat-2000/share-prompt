'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";

const Nav = () => {
  const { data : session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown , setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }

    fetchProviders();
  },[])

  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link href="/" className="flex  flex-center gap-2">
        <Image 
          src="/assets/images/logo.svg" 
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        { session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" className="outline_btn" onClick={signOut}>
              Sign out
            </button>

            <Link href="/profile">
              <Image 
                src={session.user.image}
                width={37}
                height={37}
                alt="profile"  
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && 
              Object.values(providers).map((provider) => 
                (
                <button 
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))
            }
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        { session?.user ? (
            <div className="flex">
               <Image 
                src={session.user.image}
                width={37}
                height={37}
                alt="profile"  
                className="rounded-full"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link 
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My profile
                  </Link>
                  <Link 
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                  <button 
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="black_btn mt-5 w-full"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers && 
              Object.values(providers).map((provider) => 
                (
                <button 
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))
            }
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Nav