<template>
  <div>
    <p>
      This is an small space where pretend to describe a bit more of my self,
      there's a bit of context in a few points:
    </p>
    <br />
  </div>
  <div>
    <p>
      Basics:
    </p>
    <p>
      Real name: Daniel
    </p>
    <p>
      Age: 26
    </p>
    <p>
      Web sites:
      <span style="margin-right: 10px">
        <a href="http://gitlab.com/netherlink117">
          Gitlab
        </a>
      </span>
      <span style="margin-right: 10px">
        <a href="http://twitch.tv/netherlink117">
          Twitch
        </a>
      </span>
    </p>
    <br />
    <p>Experience:</p>
    <p>
      2019-2021 Full stack web freelancer.
    </p>
    <br />
    <p>Education:</p>
    <p>
      2016-2018 Engineering degree in IT(TICS) at UTT.
    </p>
    <p>
      2014-2016 Balchelor degree in software development at UTT.
    </p>
    <br />
    <p>Interest:</p>
    <p>
      Open source software.
    </p>
    <p>
      Software development.
    </p>
    <p>
      PC games.
    </p>
    <p>
      PC and master race hardware.
    </p>
    <p>
      Technology in general.
    </p>
    <br />
  </div>
  <div>
    <p>
      That's just a little of context, you can also check my
      <span>
        <router-link :to="{ name: 'Skills' }">skills</router-link>
      </span>
      to know more about me.
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
  name: "Context"
};
</script>
