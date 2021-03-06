import React, {useState} from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default function Newsletter() {
  const [email, setEmail]: any = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        if (data.result === 'error') {
          throw data;
        }

        setSubscribed(true);
        setEmail('');

        setTimeout(() => {
          setSubscribed(false);
        }, 6000);
      })
      .catch((error) => {
        console.error(error.msg);
      });
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  return (
    <div className="bg-darkBlack py-6  md:py-12 px-6 md:px-24 rounded-lg space-y-12">
      <h3 className="dark-gray-1 ">Join my email list and get notified about new content</h3>
      <p className=" font-sans text-gray-1">
        Be the first to receive my latest content with the ability to opt-out at anytime. I promise to not spam your
        inbox or share your email with any third parties.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-darkBlack md:border-2 md:border-gray-2   rounded-lg flex items-center max-w-xl mx-auto box-border flex-col md:flex-row"
      >
        <label className="flex items-center w-full p-2 text-primary border-2 md:border-0 border-gray-2 rounded-lg mb-4 md:mb-0">
          <small>email</small>

          <svg
            className="w-6 h-6 text-primary hidden md:flex"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            placeholder="your@email.com"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="bg-darkBlack  px-4 py-2 outline-none w-full"
          />
        </label>
        <button
          type="submit"
          disabled={subscribed}
          className=" -my-1  w-full md:w-64  -mr-05  p-4 border-2 border-primary bg-primary md:bg-darkBlack hover:bg-primary rounded-lg md:text-primary text-darkBlack transition duration-500 hover:text-darkBlack outline-none"
        >
          {subscribed ? (
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Success
            </div>
          ) : (
            'Subscribe'
          )}
        </button>{' '}
      </form>
      {subscribed ? <h4 className="text-primary">Thank you for subscribing 🥳🎉</h4> : null}
    </div>
  );
}
