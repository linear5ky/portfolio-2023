import React, { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri"; 
import {RiGithubFill} from "react-icons/ri";
import {RiLinkedinBoxFill} from "react-icons/ri";
import { useRouter } from "next/router";
import contactItems from "../constants/ContactItems";

export default function Footer() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
  <footer>
      <div class="container">
        <div class="flex between">
              <div class="flex group">
                    <a href={"tel:" + contactItems.telephone}>{contactItems.telephone}</a>
                    <a href={contactItems.github} target="_blank"><RiGithubFill size={30}  color={'#fff'} /></a>
                    <a href={contactItems.linkedin}  target="_blank"><RiLinkedinBoxFill size={30}  color={'#fff'} /></a>
                
              </div>

       
              <p>© 2023 Marcus Powell</p>
           
          </div>

       
       </div>
    </footer>
    );
}
 