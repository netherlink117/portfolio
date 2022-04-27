<template>
  <div>
    <p>
      Welcome to "The portfolio", the place where Netherlink177 introduces
      himself, and indexes all its software development... but... who in Earth
      is Netherlink117? If we are thinking about the same person...
    </p>
    <br />
  </div>
  <div>
    <p>Me, this man:</p>
    <br />
    <img
      :src="require('@/assets/selfie.jpg')"
      alt="A picture of Netherlink117, when he was young..."
    />
    <br />
    <p>
      I'm an smol and chubby guy that likes a lot techology, aesthetics, and
      enjoy gaming on PC. When it's about coding, I like to improve bussines and
      processes to simplify daily lives. One of my motds is "never stop
      improving".
    </p>
    <br />
  </div>
  <div>
    <p>
      Well, that's that for now. If you wanna' know more, you can always
      download a resume for H.R. in
      <span>
        <a href="/docs/resume.pdf" download>this</a>
      </span>
      link.
    </p>
    <br />
  </div>
  <p>
    &#36;
    <span class="cursor">▌</span>
  </p>
</template>
<script>
export default {
  name: "Intro"
};
</script>
