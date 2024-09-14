import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Tech() {
  const router = useRouter();
  // console.log(router.asPath);

  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");

  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  const [errors, setErrors] = useState({});

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstname.length <= 0) {
      tempErrors["firstname"] = true;
      isValid = false;
    }

    if (lastname.length <= 0) {
      tempErrors["lastname"] = true;
      isValid = false;
    }

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }

    if (service.length <= 0) {
      tempErrors["service"] = true;
      isValid = false;
    }

    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }

    if (budget.length <= 0) {
      tempErrors["budget"] = true;
      isValid = false;
    }

    /*if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    } */

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          service: service,
          phone: phone,
          message: message,
          budget: budget,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        setService("");
        setBudget("");
        setEmail("");
        setFirstname("");
        setLastname("");
        setPhone("");
        setMessage("");
        setErrors({});

        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setService("");
      setBudget("");
      setEmail("");
      setFirstname("");
      setLastname("");
      setPhone("");
      setMessage("");
    }
    // console.log(fullname, email, subject, message);
  };

  return (
    <div class="container" id="contact">
      <h3>Contact Me</h3>

      <section class="contact">
        <form onSubmit={handleSubmit}>
          <div class="grid">
            <div class="element">
              <label for="firstname">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </label>

              {errors?.firstname && (
                <p className="error">Firstname cannot be empty.</p>
              )}
            </div>

            <div class="element">
              <label for="lastname">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </label>

              {errors?.lastname && (
                <p className="error">Lastname cannot be empty.</p>
              )}
            </div>
          </div>

          <div class="grid">
            <div class="element">
              <label for="email">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              {errors?.email && <p className="error">Email cannot be empty.</p>}
            </div>

            <div class="element">
              <label for="phone">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </label>

              {errors?.phone && <p className="error">Phone cannot be empty.</p>}
            </div>
          </div>

          <div class="grid">
            <div class="element">
              <label for="service">
                <select
                  name="service"
                  id="service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                  }}
                >
                  <option value="">Service Interested In</option>
                  <option value="custom web">Custom Web Development</option>
                  <option value="agency cover">Agency Support</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </label>

              {errors?.service && (
                <p className="error">Service cannot be empty.</p>
              )}
            </div>

            <div class="element">
              <label for="budget">
                <select
                  name="budget"
                  id="budget"
                  value={budget}
                  onChange={(e) => {
                    setBudget(e.target.value);
                  }}
                >
                  <option value="">Budget</option>
                  <option value="under-1000">Under £1,000</option>
                  <option value="1000-2000">£1,000 - £2,000</option>
                  <option value="2000-5000">£2,000 - £5,000</option>
                  <option value="over-5000">Over £5,000</option>
                  <option value="not-sure">Not Sure / To Be Discussed</option>
                </select>
              </label>

              {errors?.budget && (
                <p className="error">Budget cannot be empty.</p>
              )}
            </div>
          </div>

          <div class="grid">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <div class="grid">
            <button class="btn"> {buttonText}</button>
          </div>

          <div class="grid">
            {showSuccessMessage && (
              <p>Thankyou! Your Message has been delivered.</p>
            )}
            {showFailureMessage && (
              <p>Oops! Something went wrong, please try again.</p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
