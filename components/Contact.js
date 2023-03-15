import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";


export default function Tech() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

 
    <div class="container" id="contact">

       <h3>Contact Me</h3>  

      <section class="contact">

      <form>
            <div class="grid">
                <label for="firstname">
                    <input type="text" id="firstname" name="firstname" placeholder="First name" required />
                </label>

                <label for="lastname">
                    <input type="text" id="lastname" name="lastname" placeholder="Last name" required />
                </label>
            </div>

            <div class="grid">
                <label for="email">
                    <input type="text" id="email" name="email" placeholder="Email" required />
                </label>

                <label for="phone">
                    <input type="text" id="phone" name="phone" placeholder="Phone" required />
                </label>
            </div>


            <div class="grid">
                <label for="firstname">
                    <select name="service" id="service">
                        <option value="custom web">Service Interested In</option>
                        <option value="custom web">Custom Web Development</option>
                        <option value="agency cover">Agency Support</option>
                        <option value="agency cover">Consultation</option>
                        <option value="agency cover">Other</option>
                    </select>
                
                    
                </label>

          

            </div>

            <div class="grid">
                 <textarea></textarea>
              
            </div>


            <div class="grid">
                
                 <button class="btn">Submit</button>
            </div>
        </form>
           
      </section>
    
      
  </div>
);
}
