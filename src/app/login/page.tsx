import React from 'react';

const Login = () => {
  return (
    <main className="flex h-screen overflow-auto">
      <figure
        className="w-1/2 flex-box"
        style={{
          backgroundImage: "url('/login-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Spreading your insight for a better tomorrow
      </figure>
      <section className="w-1/2 bg-white bg-opacity-90">
        <form></form>
      </section>
    </main>
  );
};

export default Login;
