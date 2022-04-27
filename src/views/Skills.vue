<template>
  <div>
    <p>
      I have use alot of technologies to work and code, but here I list my most
      used technologies by now...
    </p>
    <br />
  </div>
  <div>
    <p>Programming languages:</p>
    <p>JavaScript.</p>
    <p>PHP.</p>
    <p>C#.</p>
    <p>Lua.</p>
    <br />
    <p>Frameworks:</p>
    <p>Laravel/Lumen.</p>
    <p>Vue.js.</p>
    <p>Express.</p>
    <p>C3.js.</p>
    <p>.net.</p>
    <br />
    <p>Platforms:</p>
    <p>Windows.</p>
    <p>Linux.</p>
    <br />
  </div>
  <div>
    <p>
      Finally, if you haven't check my projects and want to, just click
      <span>
        <router-link :to="{ name: 'Projects' }">here</router-link>
      </span>
      .
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
  name: "Skills"
};
</script>
